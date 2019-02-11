import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';


moment.locale('en-GB');

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])


const localizer = BigCalendar.momentLocalizer(moment) 
 
const Calendar = props => (
  <div>
    <BigCalendar
      style={{height: 500}}
      events={events}
      step={60}
      views={allViews}
      showMultiDayTimes
      localizer={localizer}
      
    />
  </div>
)

export default Calendar;