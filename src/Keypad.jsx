import React, { Component } from 'react';
import Button from "./Button";

function Keypad() {
  
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "C", "="];
    return (
      <div className="keypad">
        {keys.map((el) => (
          <Button key={el} value={el}>
            {el}
          </Button>
        ))}
      </div>
    );
  
}

export default Keypad;
