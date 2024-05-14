import React, { useState, useEffect } from 'react';
import goat from '../assets/breeds/goat.jpg';

const ImgPara = (props) => {
    const [showFullText, setShowFullText] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const maxCharacters = 200; // Maximum characters to display before "Read More" is shown

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Set isMobileView based on viewport width
        };

        handleResize(); // Call initially to set isMobileView
        window.addEventListener('resize', handleResize); // Add event listener for resize

        return () => {
            window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
        };
    }, []);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="breed">
            <div className="settle">
                <div className="breedpara">
                    <p>
                        <span>{props.t1}</span> {showFullText || !isMobileView ? props.para1 : props.para1.substring(0, maxCharacters) + (props.para1.length > maxCharacters ? '...' : '')}
                        {isMobileView && !showFullText && props.para1.length > maxCharacters && (
                            <button className='rmrl' onClick={toggleText}>Read More</button>
                        )}
                        {isMobileView && showFullText && (
                            <button className='rmrl' onClick={toggleText}>Read Less</button>
                        )}
                    </p>
                </div>
                <div className="breedimage">
                    <img src={props.img1} alt="" />
                </div>
            </div>
            <div className="settle true">
                <div className="breedpara">
                    <p>
                        <span>{props.t2}</span> {showFullText || !isMobileView ? props.para2 : props.para2.substring(0, maxCharacters) + (props.para2.length > maxCharacters ? '...' : '')}
                        {isMobileView && !showFullText && props.para2.length > maxCharacters && (
                            <button  className='rmrl' onClick={toggleText}>Read More</button>
                        )}
                        {isMobileView && showFullText && (
                            <button className='rmrl' onClick={toggleText}>Read Less</button>
                        )}
                    </p>
                </div>
                <div className="breedimage">
                    <img src={props.img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImgPara;
