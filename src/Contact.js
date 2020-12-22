import React from 'react';
import './Contact.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import CopyrightIcon from '@material-ui/icons/Copyright';
function Contact() {
    return (
        <div className="contact">
          <div className="contact_">
            <div className="left">
             <h1 className="side">SAE NITK</h1>
            </div>
            <div className="mid">
              <h2>More</h2>
              <div className="info">
                <p className="ip">Events</p>
                <p className="ip">Projects</p>
              </div>
            </div>
            <div className="right">
              <h2>Contact</h2>
              <div className="info_m">
                <p>SAE NITK</p>
                <p>National Institute of
                  Technology Karnataka,
                  Surathkal</p>
                <p>Dr. K Poornesh Korata, 
                Asst. Professor,Dept. of Mechanical Engg</p>
              </div>
            </div>
            <div className="x_right">
             <h2>Follow Us</h2>
             <div className="icon_r">
              <InstagramIcon className="i_r" onClick={()=> window.open("https://www.instagram.com/sae_nitk/?hl=en", "_blank")} />
              <YouTubeIcon className="i_r" onClick={()=> window.open("https://www.youtube.com/channel/UCPiCkG64oF7KKec7tEhquyw", "_blank")}/>
              <FacebookIcon  className="i_r" onClick={()=> window.open("https://www.facebook.com/saenitk/", "_blank")} />
             </div>
            </div>
          </div>
          <div className="copyright">
            <div className="copyright_">
              <CopyrightIcon  className="cc"/><span className="i_b">2020 SAE NITK</span>
              </div>
          </div>
    </div>
    )
}

export default Contact
