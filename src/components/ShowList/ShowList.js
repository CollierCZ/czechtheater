import React from "react"
import ShowCard from "../ShowCard/ShowCard"

class ShowList extends React.Component {
  render() {
    const { shows, future } = this.props;
    return (
      shows.linked_items.map(show => {
        let propsArray = {
          name: show.elements.name.value,
          description: show.elements.short_description.value,
          imageUrl: show.elements.main_image.value[0].url,
          imageDescription: show.elements.main_image.value[0].description,
          slug: show.elements.url.value
        }
        future ? propsArray.time = "future" : propsArray.time = "past";
        show.elements.ticket_link.value ? propsArray.ticketLink = show.elements.ticket_link.value : propsArray.ticketLink = false;
        if (show.elements.gallery.value) { propsArray.gallery = show.elements.gallery.value };
        return ( <ShowCard key = { propsArray.name } { ...propsArray } />
        )
      }))
  }
}

export default ShowList