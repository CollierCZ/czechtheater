import React, { Component } from "react"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./Gallery.css"

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      showLightbox: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (index) => {
    this.setState({ showLightbox: true, photoIndex: index })
  }
  
  render() {
    const { images  } = this.props;
    const { photoIndex, showLightbox } = this.state
    return (
      <div className={"gallery"}>
        {images.map((image,index) => {
          return ( <GalleryImage key={image.url} image={image} index={index} handler={this.handleClick} />)
         })}
        {showLightbox && (
          <Lightbox
          mainSrc={images[photoIndex].url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => this.setState({ showLightbox: false })}
          onMovePrevRequest={() => this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length }) }
          onMoveNextRequest={() => this.setState({ photoIndex: (photoIndex + 1) % images.length }) }
          imageCaption={images[photoIndex].description}
        />
        )}
      </div>
    )
  }
}

class GalleryImage extends Component {
  render() {
    const {image,index,handler} = this.props;
    return (
      <div
        className="image"
        onClick={() => handler(index)}
      > 
        <img 
            src={image.url + "?w=250&h=250&fit=crop"}
            alt={image.description}
        />
      </div>
    )
  }
}

export default Gallery;