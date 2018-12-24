const now = new Date();

function generateMonth(yr, mo){
  let currentDate = new Date(yr, mo, 1);
  currentDate.setDate(currentDate.getDate() - currentDate.getDay());

  let weeks = [];
  for (let wk = 0; wk < 6; wk++){ // makes 6 weeks of data
    let week = [];
    for (let dy = 0; dy < 7; dy++){
      // push current date data into list of days (1 week)
      week.push({
        date: currentDate.getDate(),
        day: currentDate.getDay(),
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
        events: []
      });
      // iterate to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push(week); // push into the list of weeks
  }

  return weeks;
}

module.exports = {
  // GET "/api/month/:date" - takes in date from params, and generates 6 weeks worth of days, with the users events in them; date is a string "YYYY-MM"
  read: (req, res) => {
    let { date } = req.params;
    if (!date.includes('-')){
      res.status(400).send("date format not accepted");
    } else {
      let year = parseInt(date.split('-')[0]);
      let month = parseInt(date.split('-')[1]);

      let weeks = generateMonth(year, month);

      res.status(200).send(weeks);
    }
  },
  // GET "/api/currentMonth" - same as above, but gives month of todays date
  readCurrent: (req, res) => {
    console.log('getting current month data: ' + now.getMonth());
    let weeks = generateMonth(now.getFullYear(), now.getMonth());
    
    res.status(200).send(weeks);
  }
}

