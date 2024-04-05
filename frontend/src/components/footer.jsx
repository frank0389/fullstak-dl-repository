import React from 'react';

const Footer = ({text, url})=>{

 return (
        <footer className="sticky bottom-0 z-50">
            <div className="p-4 text-center text-surface dark:text-white">
            © 2024 Copyright 
            <a href={url}>{" "+text}</a>
            </div>
        </footer>
    );
};

export default Footer;