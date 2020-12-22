
import React from 'react';
import './MemberImage.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function MemberImage({src,name,role,link1,link2}) {
    return (
        <div className="member">
             <div className="icon">
            <img className="avar" src={src} />
            </div>
            <div className="namee">
               <h3 className="n">{name}</h3>
            </div>
            <div className="rolee">
               <h3 className="n1">{role}</h3>
            </div>
            <div className="insta">
<InstagramIcon className="i" onClick={()=> window.open({link1}, "_blank")} />
<LinkedInIcon className="i1" onClick={()=> window.open({link2}, "_blank")}/>
            </div>
        </div>
    )
}

export default MemberImage
