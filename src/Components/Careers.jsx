import React from 'react';
import video from '../Images/career.mp4' 
import "../App.css";

function Career() {
    return (
        <>
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                   
                </video>
                <p className='video-text'>Find Your right career</p>

            </div>
            <div className='carrer-content'>
            Oops!!! We currently do not have any open positions available. Please check back later for updates on career opportunities.
            </div>
        </>
    );
}

export default Career;
