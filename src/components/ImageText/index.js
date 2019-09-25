import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ImageText extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {};
    };

    renderText = (title, text) => {
        return(
            <>
            <h1>{title}</h1>
            <p>{text}</p>
            </>
        );
    };

    renderImage = (src) => {
        return(
            <img src={src}></img>
        );
    };

    render() {
        if(this.props.orientation==="left") {
            return('leftright');
        } else {
            return('rightleft')
        }
    }
};

export default ImageText;