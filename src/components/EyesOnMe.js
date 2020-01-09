// Code EyesOnMe Component Here
import React from 'react';
class EyesOnMe extends React.Component {
    focusEvent = () => console.log('Good!')
        blurEvent = () => console.log('Hey! Eyes on me!')
    render () {
        return (
            <div>
            <button focusEvent={this.focusEvent} blurEvent={this.blurEvent}>Button</button>
           </div>
        );
    }
}

export default EyesOnMe;