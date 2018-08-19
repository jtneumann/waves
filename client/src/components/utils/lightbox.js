import React, { Component } from 'react';
import LightBox from 'react-images'


class Imagelightbox extends Component {

    state = {
        lightboxIsOPen: true,
        currentImage: this.props.pos,
        images:[]
    }

    static getDerivedStateFromProps(props,state){
        if (props.images) {
            const images = [];
            props.images.forEach(element=>{
                images.push({src:`${element}`})
            });
            return state = {
                images
            }
        }
        return false
    }

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage -1
        })
    }

    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1
        })
    }

    closeLightbox = () => {
        this.props.onclose();
    }

    render() {
        return (
            <LightBox
                currentImage={this.state.currentImage}
                images={this.state.images}
                isOpen={this.state.lightboxIsOPen}
                onClickPrev={()=> this.gotoPrevious()}
                onClickNext={()=> this.gotoNext()}
                onClose={()=> this.closeLightbox()}
            />

        );
    }
}

export default Imagelightbox;