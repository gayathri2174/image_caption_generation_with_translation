import React, { useState, useEffect } from "react";

import "../index.css"
// import Topbar from "./Topbar";
import Topbar from "../Topbar";
// import back2 from "./background/back2.jpg"
import file from "../background/file.png"
import Result from "./Result";
import Loader from "./Loader";
import { Link } from "react-router-dom";
// BHushan
import styles from '../styles.module.css';


const ImageCaptionGenerator = () => {

    const [selectedFile, setSelectedFile] = useState("");
    // const [selectedFile, setSelectedFile] = useState("No file choosen");
    const [preview, setPreview] = useState("");
    const [bool, setBool] = useState(false);

    const [name, setName] = useState("");

    const handleImageChange = (event) => {
        // const img = event.target.files[0].name;
        const img = event.target.files[0];
        setSelectedFile(img);
        console.log(img)
        console.log(img.name)
        setPreview(URL.createObjectURL(img));
    };

    const handleGenerateCaption = (event) => {

        if (selectedFile)
            setBool(true);
        else {
            window.alert("Select image first");
        }

    };

    const fetchUser = async () => {
        const url = `http://localhost:8000/fetchnotes`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            }
        });

        const json = await response.json();
        console.log('Ithe user json ', json);
        setName(json.firstname);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchUser();
        }
    }, []);

    return (
        <div style={{backgroundColor:'#f5f5ff',height:'100%'}}>
         
         {!bool && <div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px',paddingBottom:'20px',paddingLeft:'50px',paddingRight:'50px'}} className="header">
         <div className={styles.logoh} style={{fontSize:'30px'}}>TalkifyPics</div> 
         <div>
        <Link className={styles.logbtn} to="/" style={{}}>
             Logout
        </Link>
  
      </div>
        
        </div>
        
        <h1 style={{color:'rgb(38, 37, 37)',marginTop:'40px',fontSize:'30px'}}>Transforming Images into Engaging narratives</h1>
        <p style={{color:'black'}}>Upload images to receive descriptive captions and additional features text-to-speech, language translation, and making visual content accessible and engaging</p>
        <div style={{paddingBottom:'50px'}}>
            <div style={{position:'relative',borderRadius:'8px',background:'rgb(121,97,242)',height:'100%',padding:'8px',margin:'40px',marginLeft:'70px',marginRight:'70px'}}>
                <div className="box1" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <div className="imgdiv">
                            {preview ? <img className="imgcss" src={preview} alt="image" style={{width:'80%',marginTop:'30px',marginBottom:'20px'}}/>:
                            <img src={file} alt="image" style={{margin:'20px'}}/>}

                             </div>
                <div class="file-input" >
  <input type="file" id="file" className="file" onChange={handleImageChange} />
  <label for="file">CHOOSE IMAGES</label>
</div>

<p style={{marginTop:'15px',fontWeight:'300',fontFamily:'Montserrat'}}>Upload your images here and Generate Text</p>
    <button class="cssbuttons-io-button" onClick={handleGenerateCaption}>
      Generate Text
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

                           
                </div>
                

            </div>
        </div>
            </div>}
            {bool && <Result img={selectedFile} />}
   

        </div>
        
    );
};

export default ImageCaptionGenerator;
