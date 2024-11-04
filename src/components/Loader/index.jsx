import React from 'react';
import './loader.css';

function Loader({ fullscreen = true }) {
    return (
        <div className={`loader-container ${fullscreen ? "fullscreen" : ""}`}>
            <div className="rl-loading-container">
                <div className="rl-loading-thumb rl-loading-thumb-1"></div>
                <div className="rl-loading-thumb rl-loading-thumb-2"></div>
                <div className="rl-loading-thumb rl-loading-thumb-3"></div>
            </div>
        </div>
    );
}

export default Loader;
