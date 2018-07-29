// https://github.com/dptoot/react-event-calendar
import React from 'react'
// import EventCalendar from 'react-event-calendar'
import BigCalendar from 'react-big-calendar'
import moment from 'moment';

var events = require('../../data/events')



class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = events;
    console.log(this.state.events);
    }

  render() {
    var eventList = this.state.events;

      return (
        <div>
          Calendar
          <div>
              {/*
            <BigCalendar
              events={eventList}
              startAccessor='startDate'
              endAccessor='endDate'
            />
           <EventCalendar
              month={11}
              year={2017}
              events={eventList}
            /> */}
          </div>
        </div>
      )
  }
}

export default Calendar;
