import React, { Component } from "react";

const style = {
    marginBottom: "5px" 
}

class Video extends Component {
    render() {
        return (
            <iframe title={this.props.path} style={style} width="360" height="240" src={`https://www.youtube.com/embed/${this.props.path}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        );
    }
}

export default Video;