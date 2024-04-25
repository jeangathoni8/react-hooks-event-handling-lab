import React from 'react';

function EyesOnMe() {
    // Handler for focus event
    const handleFocus = () => {
        console.log('Good!');
    };

    // Handler for blur event
    const handleBlur = () => {
        console.log('Hey! Eyes on me!');
    };

    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>
            Eyes on me
        </button>
    );
}

export default EyesOnMe;
// Code EyesOnMe Component Here
