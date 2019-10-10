import React, { Component } from "react"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./Gallery.css"

const createImage = (image,index) => {
  return (
    <div
      key={image.url}
      className="image"
      onClick={() => this.setState({ showLightbox: true, photoIndex: index })}
    > 
      <img 
          src={image.url + "?w=250&h=250&fit=crop"}
          alt={image.description}
      />
    </div>
  )
}

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      showLightbox: false,
    }
  }
  render() {
    const { images  } = this.props;
    const { photoIndex, showLightbox } = this.state
    return (
      <div className={"gallery"}>
        {images.map((image,index) => {
          return (createImage(image,index))
        })}
        {showLightbox && (
          <Lightbox
          mainSrc={images[photoIndex].url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => this.setState({ showLightbox: false })}
          onMovePrevRequest={() =>
            this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length })
          }
          onMoveNextRequest={() =>
            this.setState({ photoIndex: (photoIndex + 1) % images.length })
          }
        />
        )}
      </div>
    )
  }
}

export default Gallery;