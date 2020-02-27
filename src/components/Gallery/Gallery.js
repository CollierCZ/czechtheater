import React, { Component } from "react";
import Img from "gatsby-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      showLightbox: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = index => {
    this.setState({ showLightbox: true, photoIndex: index });
  };

  render() {
    const { images } = this.props;
    const { photoIndex, showLightbox } = this.state;
    return (
      <div className={"gallery"}>
        {images.map((image, index) => {
          return (
            <GalleryImage
              key={image.fixed.src}
              image={image}
              index={index}
              handler={this.handleClick}
            />
          );
        })}
        {showLightbox && (
          <Lightbox
            mainSrc={images[photoIndex].fixed.src}
            nextSrc={images[(photoIndex + 1) % images.length].fixed.src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].fixed.src
            }
            onCloseRequest={() => this.setState({ showLightbox: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({ photoIndex: (photoIndex + 1) % images.length })
            }
            imageCaption={images[photoIndex].description}
          />
        )}
      </div>
    );
  }
}

class GalleryImage extends Component {
  render() {
    const { image, index, handler } = this.props;
    return (
      <button
        className="image"
        onClick={() => handler(index)}
        onKeyPress={() => handler(index)}
      >
        <Img fluid={image.fluid} alt={image.description} />
      </button>
    );
  }
}

export default Gallery;
