import React, { Component, useState } from "react";
import { ImageElement } from "@kontent-ai/gatsby-components";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "./Gallery.css";

const Gallery = ({images}) => {
  const [ photoIndex, setPhotoIndex ] = useState(0)
  const [ showLightbox, setShowLightbox ] = useState(false)

  const handleClick = (index) => {
    setPhotoIndex(index)
    setShowLightbox(true)
  };

  const lightboxImages = images.map(image => ({
    src: image.url,
    description: image.description
  }))
  return (
    <div className={"gallery"} data-testid="gallery">
      {images.map((image, index) => {
        return (
          <GalleryImage
            key={image.url}
            image={image}
            index={index}
            handler={handleClick}
          />
        );
      })}
      {showLightbox && (
        <Lightbox
          open={showLightbox}
          close={() => setShowLightbox(false)}
          index={photoIndex}
          slides={lightboxImages}
          plugins={[Captions]}
        />
      )}
    </div>
  );
}

class GalleryImage extends Component {
  render() {
    const { image, index, handler, url } = this.props;
    return (
      <button
        className="image"
        onClick={() => handler(index)}
        onKeyPress={() => handler(index)}
      >
        {url ? (
          <img src={url} alt={image.description} />
        ) : (
          <ImageElement
            image={image}
            alt={image.description || ""}
            layout="fixed"
            width={284}
            placeholder="blurred"
            height={284}
          />
        )}
      </button>
    );
  }
}

export default Gallery;
