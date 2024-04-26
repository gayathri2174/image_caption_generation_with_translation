import React from 'react';
import styles from '../styles.module.css';
import projLogoVideo from '../videos/proj_logo.mp4';
import projectLogoVideo from '../videos/project_logo.mp4';
import catImage from '../background/h1.png';
import { Link } from 'react-router-dom';
import Section from './section';


const Home = () => {
  
  return (
    <div style={{backgroundColor:'#f5f5ff',height:'100%'}}>
      <div>
         <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'30px',paddingLeft:'50px',paddingRight:'45px'}}>
         <div className={styles.logoh} style={{fontSize:'30px'}}>TalkifyPics</div> 
         <div>
        <Link className={styles.logbtn} to="/login" style={{fontSize:'18px'}}>
             Login
        </Link>
  
      </div>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'row',color:'black',padding:'20px',justifyContent:'space-between',paddingBottom:'100px',paddingLeft:'50px'}}>
        <div style={{width:'50%',textAlign:'left'}}>
          <h3 style={{fontSize:'60px',marginBottom:0}}> Empowering Images with <span style={{color:'#004cf5'}}>Words</span></h3>
          {/* <div>Everything you need to translate</div> */}
          <div style={{marginBottom:'50px',marginLeft:'5px',marginTop:'20px',fontSize:'16px',fontWeight:'400'}}>
 Upload images to receive descriptive captions and additional features text-to-speech, language translation, and making visual content accessible and engaging
          </div>
          <div>
         <Link className={styles.btn} to="/upload" style={{marginRight:'30px'}}>
             Get started for free
           </Link>
           <Link className={styles.btn} to="/upload" style={{backgroundColor:'#12184a'}}>
             How Widget Works
           </Link>


          </div>

        </div>
        <img src={catImage} alt ='h1' style={{width:'35%',height:'40%',marginTop:'65px',marginRight:'170px'}} />
      </div>
      <Section/>

    </div>
    
  
    // <div >
    //   <div style={{display:'flex',justifyContent:'space-between',margin:'40px',alignItems:'center'}}>
      
    //   <div style={{display:'flex',alignItems:'center'}}>
    //   <img src={catImage} alt='logo' style={{width:'80px'}}/>
    //   <div className={styles.logoh}>
    //     |  hello@cargo.io
    //   </div>
    //   </div>
      
    //   <div>
    //   <Link className={styles.logbtn} to="/login">
    //         Login
    //       </Link>

    //   </div>
    //   </div>
    //      <div>
    //       <h2>Cargo <span style={{color:'#a4a4a4'}}>Design </span>Agency</h2>
    //       <h4>Let our AI do the talking! Generate captions for your images in
    //         seconds....<br/>
    //         Let our AI do the talking! 
    //         </h4>


    //      </div>
    //      <div>
    //      <Link className={styles.btn} to="/upload">
    //         Get Started!
    //       </Link>


    //      </div>
 

    // </div>
    
  );
};

export default Home;
