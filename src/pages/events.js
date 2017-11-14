import React from 'react'
import Link from 'gatsby-link'
import '../css/events.css'
import EventData from '../components/event-data'
import Calendar from '../components/calendar'



//Calendar shows up....
//If user clicks on a particular event in the calendar it shows towards the right
const EventsPage = () => (
  <div className="events">
    <div className="events-left">
      <Calendar/>
    </div>
    <div className="events-right">
      <EventData/>
    </div>
  </div>
)

export default EventsPage
