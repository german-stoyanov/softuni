import React from 'react';
import Image from '../Slider/Image';

export default class Rooster extends React.Component {
    render = () => {
        
        let images = this.props.images.map(image=> image = <Image url={image.url} id={image.id} bio={image.bio} name={image.name} updateF={this.props.updateC}/>)
        
        
        return (
            <section id="roster">
                {images}        
            </section>
        )
    }
}