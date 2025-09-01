import React from 'react';

const Logo= () => {
    return (
        <div className=" flex justify-center items-center   font-sans">
            <style jsx>{`
                /* Global styles - you might move these to a global CSS file in a real Next.js app */
               
            
                
                /* Animations */
                @keyframes float {
                    0% { transform: translateY(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
                    50% { transform: translateY(-20px) rotateX(5deg) rotateY(5deg) rotateZ(5deg); }
                    100% { transform: translateY(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
                }

                @keyframes shadow-pulse {
                    0%, 100% {
                        transform: scale(0.9) translateX(-50%);
                        opacity: 0.7;
                    }
                    50% {
                        transform: scale(1.1) translateX(-50%);
                        opacity: 1;
                    }
                }
                
                @keyframes rotate-s-1 { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
                @keyframes rotate-s-2 { from { transform: rotateX(0deg); } to { transform: rotateX(360deg); } }
                @keyframes rotate-e-1 { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
                @keyframes rotate-e-2 { from { transform: rotateX(0deg); } to { transform: rotateX(360deg); } }

                /* Logo Container */
                .logo-container {
                    position: relative;
                    width: 120px;
                    height: 100px;
                    transform-style: preserve-3d;
                    animation: float 6s ease-in-out infinite;
                }

                .logo-shadow {
                    position: absolute;
                    bottom: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 200px;
                    height: 20px;
                    background: rgba(0, 255, 255, 0.3);
                    border-radius: 50%;
                    filter: blur(20px);
                    animation: shadow-pulse 6s ease-in-out infinite;
                    z-index: -1;
                }

                /* Letter Wrapper */
                .letter-wrapper {
                    position: absolute;
                    width: 50%; /* Each letter takes half the container width */
                    height: 100%;
                    transform-style: preserve-3d;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .letter-wrapper.s {
                    left: 0;
                    animation: rotate-s-1 10s linear infinite;
                }

                .letter-wrapper.e {
                    right: 0;
                    animation: rotate-e-1 10s linear infinite;
                }

                /* Letter Cube Base */
                .letter-cube {
                    position: relative;
                    width: 30px; /* Adjust size relative to wrapper */
                    height: 30px;
                    transform-style: preserve-3d;
                }
                
                .letter-wrapper.s .letter-cube {
                    animation: rotate-s-2 12s linear infinite reverse;
                }

                .letter-wrapper.e .letter-cube {
                    animation: rotate-e-2 12s linear infinite;
                }

                /* Faces of the Cube */
                .face {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    font-weight: bold;
                    color: #fff;
                    background: rgba(0, 188, 212, 0.8); /* Darker blue */
                    border: 2px solid rgba(0, 255, 255, 0.5);
                    box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
                    transition: transform 0.3s ease;
                }

                .face.front  { transform: rotateY(0deg) translateZ(15px); }
                .face.back   { transform: rotateY(180deg) translateZ(15px); }
                .face.right  { transform: rotateY(90deg) translateZ(15px); }
                .face.left   { transform: rotateY(-90deg) translateZ(15px); }
                .face.top    { transform: rotateX(90deg) translateZ(15px); }
                .face.bottom { transform: rotateX(-90deg) translateZ(15px); }

                /* Specific color adjustments for depth */
                .face.back { background: rgba(0, 150, 175, 0.8); box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); } /* Slightly darker */
                .face.right, .face.left { background: rgba(0, 170, 190, 0.85); box-shadow: 0 0 12px rgba(0, 255, 255, 0.6); } /* Intermediate */
                .face.top, .face.bottom { background: rgba(0, 200, 220, 0.7); box-shadow: 0 0 18px rgba(0, 255, 255, 0.8); } /* Lighter, more glow */

                /* Active face effect on hover (optional) */
                .letter-cube:hover .face {
                    transform: scale(1.05) translateZ(40px); /* slightly pop out */
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .logo-container {
                        width: 300px;
                        height: 150px;
                    }
                    .letter-cube {
                        width: 80px;
                        height: 80px;
                    }
                    .face {
                        font-size: 50px;
                    }
                    .face.front  { transform: rotateY(0deg) translateZ(40px); }
                    .face.back   { transform: rotateY(180deg) translateZ(40px); }
                    .face.right  { transform: rotateY(90deg) translateZ(40px); }
                    .face.left   { transform: rotateY(-90deg) translateZ(40px); }
                    .face.top    { transform: rotateX(90deg) translateZ(40px); }
                    .face.bottom { transform: rotateX(-90deg) translateZ(40px); }

                    .logo-shadow {
                        width: 200px;
                        height: 20px;
                        bottom: -20px;
                        filter: blur(10px);
                    }
                }

                @media (max-width: 480px) {
                    .logo-container {
                        width: 200px;
                        height: 100px;
                    }
                    .letter-cube {
                        width: 60px;
                        height: 60px;
                    }
                    .face {
                        font-size: 40px;
                    }
                    .face.front  { transform: rotateY(0deg) translateZ(30px); }
                    .face.back   { transform: rotateY(180deg) translateZ(30px); }
                    .face.right  { transform: rotateY(90deg) translateZ(30px); }
                    .face.left   { transform: rotateY(-90deg) translateZ(30px); }
                    .face.top    { transform: rotateX(90deg) translateZ(30px); }
                    .face.bottom { transform: rotateX(-90deg) translateZ(30px); }

                    .logo-shadow {
                        width: 150px;
                        height: 15px;
                        bottom: -15px;
                        filter: blur(8px);
                    }
                }
            `}</style>
            <div className="logo-container">
                <div className="letter-wrapper s">
                    <div className="letter-cube">
                        <div className="face front">S</div>
                        <div className="face back">S</div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                        <div className="face top">S</div>
                        <div className="face bottom">S</div>
                    </div>
                </div>
                <div className="letter-wrapper e">
                    <div className="letter-cube">
                        <div className="face front">E</div>
                        <div className="face back">E</div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                        <div className="face top">E</div>
                        <div className="face bottom">E</div>
                    </div>
                </div>
                <div className="logo-shadow"></div>
            </div>
        </div>
    );
};

export default Logo;
