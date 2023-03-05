function meetings(meetings) {
    let scheduledMeetings = {};
    let conflicts = [];
  
    meetings.forEach((meeting) => {
      let [weekday, person] = meeting.split(' ');
      if (scheduledMeetings[weekday]) {
        conflicts.push(weekday);
        return;
      }
      scheduledMeetings[weekday] = person;
      console.log(`Scheduled for ${weekday}`);
    });
  
    console.log('');
    Object.keys(scheduledMeetings).forEach((weekday) => {
      console.log(`${weekday} -> ${scheduledMeetings[weekday]}`);
    });
  
    conflicts.forEach((weekday) => {
      console.log(`Conflict on ${weekday}!`);
    });
  }

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)