
import React from 'react';
import './Core.css';
import MemberImage from './MemberImage';
import img1 from './srinivas.jpg';
import img2 from './WhatsApp Image 2020-06-01 at 19.33.40.jpeg';
import img3 from './scanner_20180711_123031.jpg';
import img4 from './Pradeep photo.jpg';
import img5 from './man.jpg';
import img6 from './IMG_7409.jpg';
import img7 from './IMAG0981.jpg';
import img8 from './DSC_0119 copy.jpg';
function Core() {
    return (
        <div className="core">
        <div className="top">
        <h1 className="hc">Core Team</h1>
        </div>
        <div className="mem">
         <MemberImage
         src={img1}
         name="Ankit Gupta"
         role="Event Coordinator"
         link1="#"
         link2="#"/>
         <MemberImage
         src={img2}
         name="Shripad Kelapure"
         role="Technical Lead"
         link1="#"
         link2="#" />
         <MemberImage
         src={img3}
         name="Diwaker S Goud"
         role="Event Coordinator"
         link1="#"
         link2="#"/>
         <MemberImage
         src={img4}
         name="Pradeep Modi"
         role="Technical Lead"
         link1="#"
         link2="#"/>
        </div>
        <div className="mem1">
         <MemberImage
         src={img5}
         name="Manohar Islavath"
         role="Treasurer"
         link1="#"
         link2="#" />
        <MemberImage
         src={img6}
         name="Devendra Gharat"
         role="President"
         link1="#"
         link2="#" />
         <MemberImage
          src={img7}
          name="Rajat Shukla"
          role="Convener"
          link1="#"
          link2="#"/>
         <MemberImage
          src={img8}
          name="K Eshwar Sai Srinivas"
          role="Media Coordinator"
          link1="#"
          link2="#"/>
        </div>
      </div>
    )
}

export default Core
