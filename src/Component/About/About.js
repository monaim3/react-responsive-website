import React from 'react';
import Common from '../Common/Common';
import web from '../Image/4249454.jpg'
const About = () => {
    return (
        <div>
             <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
        </div>
    );
};

export default About;