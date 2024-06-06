import React from 'react'
import MemeGenerator from './MemeGenerator';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './MemeGeneratorWindow.css';

const MemeGeneratorWindow = () => {
    const [memeOpen, setMemeOpen] = useState(false);

    const openMemeWindow = () => {
        setMemeOpen(true);
        const newWindow = window.open('', 'MemeGenerator', 'width=1600,height=1400');
        ReactDOM.render(<MemeGenerator />, newWindow.document.body);
    }

    return (
        
        <div>
            <h1>Meme Generator</h1>
            <button className='button' onClick={openMemeWindow}>Open Meme Generator</button>
            {memeOpen}
        </div>
        
    );
}

export default MemeGeneratorWindow
