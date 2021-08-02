import React from 'react';
import Common from '../Common/Common'
import web from '../Image/cigarette-110849_1280.jpg'

const Home = () => {
    return (
        <div>
            <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
        </div>
    );
};

export default Home;