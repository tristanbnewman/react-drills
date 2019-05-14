import React, {Component} from 'react';

class Image extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <img src={this.props.image}/>
        );
    }
}

export default Image;