import React, { Component } from "react"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import "./Gallery.css"

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }
  render() {
    const { images  } = this.props;
    const { selectedImage, showLightbox } = this.state
    return (
      <div className={"gallery"}>
        {images.map(image => {
            return (
              <div
                key={image.url}
                className="image"
                onClick={() => this.setState({ showLightbox: true, selectedImage: image })}
              > 
                <img 
                    src={image.url + "?w=250&h=250&fit=crop"}
                    alt={image.description}
                />
              </div>
            )
        })}
        {showLightbox && (
          <Dialog>
          <button
            className="close button"
            onClick={() => this.setState({ showLightbox: false })}
          >
            Close
          </button>            
            <img 
                    src={selectedImage.url}
                    alt={selectedImage.description}
                />
          </Dialog>
        )}
      </div>
    )
  }
}

export default Gallery;