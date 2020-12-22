import React from 'react';
import './news.css';
import ReactPlayer from 'react-player'
//https://youtu.be/_nBlN9yp9R8
//https://www.youtube.com/watch?v=_nBlN9yp9R8
function News() {
    return (
        <div className="news">
        <div className="head">
        <h1>Recent Activities</h1>
        </div>
        <div className="main">
        <div className="activity">
<img className="iii" src="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-10-at-5.13.03-PM.jpeg" />
<img className="iii" src="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-10-at-5.13.03-PM.jpeg" />
<img className="iii" src="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-10-at-5.13.03-PM.jpeg" />
        </div>
        <div className="youtube">
        <ReactPlayer className="vid"
        height= '250px'
  width='400px'
  margin-left='35px'
  margin-right='10px'
  margin-top='100px'
         url='https://www.youtube.com/watch?v=TFW0CMEWVqI&t=1238s' />
        </div>
        </div>
     
            
        </div>
    )
}

export default News
