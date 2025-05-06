import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          if (parallaxRef.current) {
            const rect = parallaxRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
              const scrollProgress =
                1 - (rect.bottom - windowHeight) / (rect.height + windowHeight);
      
              const parallaxStart = 0; 
              const parallaxEnd = 60;  
      
              const position =
                parallaxStart +
                (parallaxEnd - parallaxStart) * Math.max(0, Math.min(1, scrollProgress));
      
              parallaxRef.current.style.backgroundPosition = `center ${position}%`;
            }
          }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <div className="homepage" ref={parallaxRef}>
            <h1>A PRODCUTION COMPANY</h1>
            <p>FOR ANY PROJECT</p>
            <div className="booking">
                <h1>BOOK A CONSULTATION</h1>
                <p>We start out journey by a simple phone call, let's discuss how we can help your business grow!</p>
                <Link to="" className="learn_more">Learn more</Link>
            </div>
        </div>
    );
}