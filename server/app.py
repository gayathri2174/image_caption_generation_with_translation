from flask import Flask, request, jsonify
import numpy as np
import pickle
import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, preprocess_input
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.preprocessing.sequence import pad_sequences
from flask_cors import CORS


app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 1
cors = CORS(app, resources={r"/*": {"origins": "*"}})
mobilenet_model = MobileNetV2(weights="imagenet")
mobilenet_model = Model(inputs=mobilenet_model.inputs, outputs=mobilenet_model.layers[-2].output)

model = tf.keras.models.load_model('mymodel.h5')

with open('tokenizer.pkl', 'rb') as tokenizer_file:
    tokenizer = pickle.load(tokenizer_file)
    
def get_word_from_index(index, tokenizer):
    return next((word for word, idx in tokenizer.word_index.items() if idx == index), None)

@app.route('/after', methods=['POST'])
def after():
    uploaded_image = request.files['file']
    uploaded_image.save('static/file.jpg')
    
    image = load_img('static/file.jpg', target_size=(224, 224))
    image = img_to_array(image)
    image = preprocess_input(image)
    
    image_features = mobilenet_model.predict(np.expand_dims(image, axis=0))
    max_caption_length = 34
    
    def predict_caption(model, image_features, tokenizer, max_caption_length):
        caption = "startseq"
        for _ in range(max_caption_length):
            sequence = tokenizer.texts_to_sequences([caption])[0]
            sequence = pad_sequences([sequence], maxlen=max_caption_length)
            yhat = model.predict([image_features, sequence], verbose=0)
            predicted_index = np.argmax(yhat)
            predicted_word = get_word_from_index(predicted_index, tokenizer)
            caption += " " + predicted_word
            if predicted_word is None or predicted_word == "endseq":
                break
        return caption
    

    generated_caption = predict_caption(model, image_features, tokenizer, max_caption_length)
    generated_caption = generated_caption.replace("startseq", "").replace("endseq", "")
    print(generated_caption)
    
    return jsonify({'caption': generated_caption})

if __name__ == '__main__':
    app.run(debug=True)
