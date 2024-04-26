import React from "react";
import '../section.css'
const Section=()=>{
    return(
        <div style={{backgroundColor:'#004cf5'}}>
            <section class="features-icons bg-light text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="far fa-grin-wink m-auto text-primary"></i>
            </div>
            <h3>Image to Text</h3>
            <p class="lead mb-0">Users can upload images, and the application uses machine learning to generate automatic captions, providing textual descriptions for the uploaded images.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="far fa-grin m-auto text-primary"></i>
            </div>
            <h3>Text to Speech</h3>
            <p class="lead mb-0">Authenticated users can convert text-based captions into speech, enhancing accessibility and user experience by providing an audio representation of the generated captions.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="far fa-grin-beam m-auto text-primary"></i>
            </div>
            <h3>Translation</h3>
            <p class="lead mb-0">The application supports translation of captions from English to other languages, allowing users to easily comprehend and communicate in their preferred language.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default Section