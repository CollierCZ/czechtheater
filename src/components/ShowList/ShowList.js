import React from "react"
import ShowCard from "../ShowCard/ShowCard"


class ShowList extends React.Component {
  render() {
    const { shows, future  } = this.props;
    console.log(shows)
    return (
      shows.map(show => {
        let propsArray = {
          name: show.elements.name.value,
          description: show.elements.description.resolvedHtml.substring(0, show.elements.description.resolvedHtml.indexOf('</p>')),
          imageUrl: show.elements.main_image.assets[0].url,
          imageDescription: show.elements.main_image.assets[0].description,
          slug: show.elements.url.value
        }
        future ? propsArray.time = "future" : propsArray.time = "past";
        show.elements.ticket_link.value ? propsArray.ticketLink = show.elements.ticket_link.value : propsArray.ticketLink = false;
        if (show.elements.gallery.assets){propsArray.gallery = show.elements.gallery.assets};
        return (
          <ShowCard key={propsArray.name}
            {...propsArray}
          />
        )
      
    }))}  
  }

export default ShowList