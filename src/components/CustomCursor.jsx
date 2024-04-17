import React, { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';

function CustomCursor() {
    return (
        <div className="App">
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: 'green',
                }}
                outerStyle={{
                    border: '3px solid white',
                }}
            />
        </div>
    );
}

export default CustomCursor;
