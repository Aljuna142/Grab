// src/components/ColorSwatches.js
import React from 'react';
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

export default ColorSwatches;




