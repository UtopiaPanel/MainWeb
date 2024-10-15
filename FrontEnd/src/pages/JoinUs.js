import React from 'react';
import StaffImage from "../assets/Staff.jpg";

const JoinUs = () => {
    return (
        <div>
            <h1><center>Staff</center></h1>
            <img src={StaffImage} alt="Staff" title="Staff" style={{display: 'block', margin: '0 auto'}}/>
        </div>

    );
};

export default JoinUs;