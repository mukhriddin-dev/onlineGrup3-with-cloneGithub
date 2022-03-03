import React from 'react';

const Footer = () => {
    const date=new Date();
    
    return (
        <div className={"footer"}>
            {date.getFullYear()} <span>powered by lorem</span>
        </div>
    );
};

export default Footer;
