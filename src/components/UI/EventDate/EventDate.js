import React from 'react';
import classes from './EventDate.css';
import './EventDate.css';
// function convertTimes (s, f){
//     return 'blah, blah, blah';
// }
// {textDecoration: todo.isCompleted ? 'line-through' : ''}
function extractDay (theString) {
    // takes the database string for event date and returns the date (day) of the event
    // YYYY-MM-DDT00:000:00:000Z

    var tmp = theString + 'Z';
  
    tmp = "2020-01-06T00:00:00.000Z";
    var theDate = theString.substr(0,10);

    var dbDate = new Date(theDate.replace("-", "/"));
    var displayNumber = dbDate.getDate();
    {console.log('in extractDay: ' + theString)}
    {console.log('in extractDay')}
    {console.log(displayNumber)}
    {console.log('==================')}
    return dbDate.getDate();
}
function displayDate (theString) {
    var theDate = theString.substr(0,10);

    var dbDate = new Date(theDate.replace("-", "/"));
    var theMonth = (dbDate.getMonth().toFixed(0) + 1);
    var theDay = dbDate.getDate().toString();
    var theYear = dbDate.getFullYear().toString();
    var theDateString = theMonth.concat("/");
    
    theDateString = theDate.concat(theDay);
    theDateString = theDateString.concat("/");
    theDateString = theDate.concat(theYear);
    {console.log('==================')}
    {console.log(' displayDate')}
    {console.log('==================')}
    {console.log('theDate:' + theDate)}
    {console.log('theString' + theString)}
    {console.log('dbDate:' + dbDate)}

    {console.log('theMonth:' + theMonth)}
    {console.log('theDay' + theDay)}
    {console.log('theYear' + theYear)}
    {console.log('theDateString:' + theDate)}
    {console.log('==================')}
    return theDateString;
}
function displayWeekday (theString) {
    // takes the database string for event date and returns the date (day) of the event
    // YYYY-MM-DDT00:000:00:000Z
    var tmp = theString + 'Z';
    {console.log('in displayWeekday: ' + theString)}
    var dbDate = new Date(theString);
    var dayOfWeek = dbDate.getDay();
    console.log("DOW:" + dayOfWeek);
    dayOfWeek = dayOfWeek + 1;
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    // var dow = isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    // var returnValue = dow;

    return dbDate.get;
}
function EventDate(props) {
    // const transformDate = (theString) => {

    // }
    // const extractDay = (theString) => {
    //     // takes the database string for event date and returns the date (day) of the event
    //     // YYYY-MM-DDT00:000:00:000Z
    
    //     var tmp = theString + 'Z';
    //     {console.log('in extractDay: ' + theString)}
    //     tmp = "2020-01-06T00:00:00.000Z";
    //     var dbDate = new Date(tmp);
    //     return dbDate.getDate();
    // }
    // const displayDate = (theString) => {
    //     var tmp = theString + 'Z';
    //     {console.log('in displayDate: ' + theString)}
    //     tmp = "2020-01-06T00:00:00.000Z";
    //     var dbDate = new Date(tmp);
    //     var theMonth = dbDate.getMonth().toString() + 1;
    //     var theDay = dbDate.getDate().toString();
    //     var theYear = dbDate.getFullYear().toString();
    //     var theDate = theMonth.concat("/");
    //     theDate = theDate.concat(theDay);
    //     theDate = theDate.concat("/");
    //     theDate = theDate.concat(theYear);
    //     return theDate;

    // }
    // const displayWeekday = (theString) => {
    //     // takes the database string for event date and returns the date (day) of the event
    //     // YYYY-MM-DDT00:000:00:000Z
    //     var tmp = theString + 'Z';
    //     {console.log('in displayWeekday: ' + theString)}
    //     var dbDate = new Date(theString);
    //     var dayOfWeek = dbDate.getDay();
    //     console.log("DOW:" + dayOfWeek);
    //     return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    //     // var dow = isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    //     // var returnValue = dow;

    //     return dbDate.get;
    // }
    // const convertTimes = (s, e) => {
    //     var sd = s.replace(":", ".");
    //     var startTime = parseFloat(sd);
    //     var displayStart = (startTime < 13 ? startTime : startTime - 12);
    //     var ed = e.replace(":", ".");
    //     var endTime = parseFloat(ed);
    //     var displayEnd = (endTime < 13 ? endTime : endTime - 12);;
    //     var returnString = "";
    //     if (startTime < 12.00){
    //         returnString = returnString + displayStart.toFixed(2) + " AM to ";
    //     }else{
    //         returnString = returnString + displayStart.toFixed(2) + " PM to ";
    //     }
    //     if (endTime < 12){
    //         returnString = returnString + displayEnd.toFixed(2) + " AM";
    //     }else{
    //         returnString = returnString + displayEnd.toFixed(2) + " PM";
    //     }

    //     return returnString;
    // }
    return (
        <div>
        {/* <div>{transformDate}</div>   */}
        <div><font className="EventDay" >{extractDay(props.eventDate)}</font>
            <font className="EventDOW">{displayWeekday(props.eventDate)} </font>
            <font className="EventDate">{displayDate(props.eventDate)}</font>
        </div>
        </div>
    )
}
export default EventDate;

