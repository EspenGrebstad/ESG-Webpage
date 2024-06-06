import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Snake from '../SnakeGame/Snake';
import './SnakeGameWindow.css';

const SnakeGameWindow = () => {
    const [gameOpen, setGameOpen] = useState(false);

    const openGameWindow = () => {
        setGameOpen(true);
        const newWindow = window.open('', 'SnakeGame', 'width=1600,height=1400');
        ReactDOM.render(<Snake />, newWindow.document.body);
    }

    return (
        
        <div>
            <h1>Snake Game</h1>
            <button className='button' onClick={openGameWindow}>Open Game</button>
            {gameOpen}
        </div>
        
    );
}

export default SnakeGameWindow;