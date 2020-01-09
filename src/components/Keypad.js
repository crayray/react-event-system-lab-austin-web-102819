// Code Keypad Component Here
import React from 'react';

class Keypad extends React.component {
    logInput = () => console.log('Entering password...')
    
    render () {
        return (
            <input type="password" onKeyUp={this.logInput}  />
        );
    }
}
export default Keypad;