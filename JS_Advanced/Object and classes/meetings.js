function meetings(meetings) {
  let scheduledMeetings = {};
  let conficts = [];

  for (let meeting of meetings) {
    let [day, name] = meeting.split(" ");
    if (scheduledMeetings[day]) {
      console.log(`Conflict on ${day}!`);
      conficts.push(day);
      continue;
    }
    scheduledMeetings[day] = name;
    console.log(`Scheduled for ${day}`);
  }

  for (let [day, name] of Object.entries(scheduledMeetings)) {
    console.log(`${day} -> ${name}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);

