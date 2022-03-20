import React from "react";
import ShowCard from "../ShowCard/ShowCard";

class ShowList extends React.Component {
  render() {
    const { shows, future } = this.props;
    return (
      <div className="showList">
        {shows.value.map((show) => {
          let propsArray = {
            name: show.elements.name.value,
            description: show.elements.short_description.value,
            showImage: show.elements.main_image.value[0],
            slug: show.elements.url.value,
          };
          future ? (propsArray.time = "future") : (propsArray.time = "past");
          show.elements.ticket_link.value
            ? (propsArray.ticketLink = show.elements.ticket_link.value)
            : (propsArray.ticketLink = false);
          return <ShowCard key={propsArray.name} {...propsArray} />;
        })}
      </div>
    )
  }
}

export default ShowList;
