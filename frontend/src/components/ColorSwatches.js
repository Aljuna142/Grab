// src/components/ColorSwatches.js
/*import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/styles/ColorSwatches.css'; // Add necessary styles here

const ColorSwatches = ({ colors, selectedColorIndex, onColorClick }) => {
    return (
        <div className="color-swatches">
            {colors.map((color, index) => (
                <Button
                    key={index}
                    style={{ backgroundColor: color.hex }}
                    className={`color-swatch ${selectedColorIndex === index ? 'active' : ''}`}
                    onClick={() => onColorClick(index)}
                >
                    <span>{color.name}</span>
                </Button>
            ))}
        </div>
    );
};

export default ColorSwatches;*/


import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/styles/ColorSwatches.css'; // Add necessary styles here

const ColorSwatches = ({ colors = [], selectedColorIndex, onColorClick }) => {
    // If colors array is empty, return null or a default UI
    if (colors.length === 0) {
        return <div>No colors available</div>; // Or return null
    }

    return (
        <div className="color-swatches">
            {colors.map((color, index) => (
                <Button
                    key={index}
                    style={{ backgroundColor: color.hex }}
                    className={`color-swatch ${selectedColorIndex === index ? 'active' : ''}`}
                    onClick={() => onColorClick(index)}
                >
                    <span>{color.name}</span>
                </Button>
            ))}
        </div>
    );
};

export default ColorSwatches;
