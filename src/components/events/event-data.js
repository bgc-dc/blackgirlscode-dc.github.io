import React from 'react'
var events = require('../../data/events')

class EventData extends React.Component {
  constructor(props){
    super(props);
      this.state = events;
    }
  render() {

    let latestEvent =this.state.events.map(function (event, index) {
      var today = new Date()
      console.log("today", today);

      var eventDate = new Date(event.date)
      console.log("eventDate", eventDate);
      if (today <= eventDate){
        return ( //TODO: Add carousel for upcoming events
          <div key={index}>
            <h1>{event.title || "N/A"}</h1>
            <h3>{event.time || "N/A"}</h3>
            <p>
              {event.locationName || "N/A"}<br/>
              {event.address || "N/A"}<br/>
              {event.city || "N/A"}, {event.state || "N/A"}  {event.zipCode || "N/A"}
            </p>
            <p>
              {event.description || "N/A"}
            </p>
            <a href={event.link}>Click Here</a>

          </div>
        )
      } else if (!(today <= eventDate)){ //fix conditional to show if there is no upcoming event
          <div>
            <h3>There are no upcoming events s</h3>
          </div>

      }
    })
      return (
        <div>
          empty 
          {/* {latestEvent} **/}
        </div>
      )
  }
}

export default EventData;
