import './App.css';
import Header from './Header';
import Vision from './Vision';
import Core from './Core';
import News from './News';
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import CopyrightIcon from '@material-ui/icons/Copyright';
import Project from './Project';
import Blogs from './Blogs';
import Club from './Club';
import About from './About';
import Message from './Message';

function App() {
  return (
    <Router>
      <Switch>
       <div className="app">
        <Route exact path="/">
          <Header />
          <img className="imgg" src="https://hackverse.nitk.ac.in/blog/assets/images/nitk/aerial-kite-fest.jpg" />
          <span className="icons">
            <FacebookIcon className="icon_hp_f" fontSize='large' onClick={()=> window.open("https://www.facebook.com/saenitk/", "_blank")}/>
            <YouTubeIcon className="icon_hp_yt" fontSize='large' onClick={()=> window.open("https://www.youtube.com/channel/UCPiCkG64oF7KKec7tEhquyw", "_blank")}/>
            <LinkedInIcon className="icon_hp_li"fontSize='large' onClick={()=> window.open("https://www.linkedin.com/company/saenitk/?originalSubdomain=in", "_blank")}/>
            <InstagramIcon className="icon_hp_ins"fontSize='large' onClick={()=> window.open("https://www.instagram.com/sae_nitk/?hl=en", "_blank")}/>
          </span>
          <section class="vision"><Vision /></section>
          <section class="core"><Core /></section>
          <News />         
          <Contact />
        </Route>
        <Route exact path="/project">
            <Header />
            <Project />
            <div className="blank1"></div>
            <Contact />
        </Route>
        <Route exact path="/blog">
          <Header />
          <h1 className="heading_blog">BLOGS</h1>
          <div className="blog_info">
            <div className="blog_info_1">
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
            </div>
            <div className="blog_info_2">
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
            </div>
            <div className="blog_info_3">
             
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
            </div>
            <div className="blog_info_4">
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
            </div>
            <div className="blog_info_5">
              <Blogs
               image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-08-at-20.56.22-1200x640.jpeg"
               desc="Imagine a material that you do not want to be susceptible to cutting under any circumstances. That could be security doors, bike locks, protective equipment like body Armor or, heck, even shoe soles. These are just a handful of the applications that Proteus can be used."
             />
             </div>
             </div>
             <div className="blank1"></div>
            <Contact />
           </Route>
           <Route exact path="/club">
           <Header />
           <Club />
           <div className="blank1"></div>
           <Contact />
           </Route>
           <Route exact path="/about">
           <Header />
           <About />
           <div className="blank1"></div>
           <Contact />
           </Route>
           <Route exact path="/message">
            <Message />
            <div className="blank1"></div>
            <Contact />
          </Route>
          
           
    </div>
    </Switch>
    </Router>
  );
}

export default App;

