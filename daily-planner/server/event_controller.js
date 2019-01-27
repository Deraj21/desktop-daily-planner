const now = new Date();

// generates 6 weeks for the calendar to later fill with data
function generateMonth(yr, mo){
  let currentDate = new Date(yr, mo, 1);
  currentDate.setDate(currentDate.getDate() - currentDate.getDay());

  let weeks = [];
  for (let wk = 0; wk < 6; wk++){ // makes 6 weeks
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

// filles a generated month with events, and sends it w/ res
function fillMonth(db, res, month, weeks){
  // grab events data from db
  db.get_events([month])
    .then(events => {
      // put events into month
      let filledWeeks = weeks.map(week => {
        return week.map(day => {
          for (let i = 0; i < events.length; i++){
            if (events[i].day === day.date && events[i].month === day.month && events[i].year === day.year){ // if event lands on the day
              day.events.push(events[i]);
            }
          }
          return day;
        });
      })

      res.status(200).send(filledWeeks);
    })
    .catch(err => console.log(err.message));
}

module.exports = {
  // GET "/api/month/:date" - takes in date from params, and generates 6 weeks worth of days, with the users events in them; date is a string "YYYY-MM"
  readMonth: (req, res) => {
    let { date } = req.params;
    const db = req.app.get('db');
    if (!date.includes('-')){ // if not right format, send error status
      res.status(400).send("date format not accepted");
    } else {
      // generate empty month
      let year = parseInt(date.split('-')[0]);
      let month = parseInt(date.split('-')[1]);
      let weeks = generateMonth(year, month);
      
      fillMonth(db, res, month, weeks);
    }
  },
  // GET "/api/currentMonth" - same as above, but for month of todays date
  readCurrentMonth: (req, res) => {
    const db = req.app.get('db');
    let weeks = generateMonth(now.getFullYear(), now.getMonth());
    
    fillMonth(db, res, now.getMonth(), weeks);
  },
  // GET "/api/event/:id" - gets one event
  readEvent: (req, res) => {
    let { id } = req.params;
    const db = req.app.get('db');

    db.get_event([id])
      .then( response => res.status(200).send(response[0]))
      .catch( err => console.log(err.message));
  },
  // POST "/api/event" - creates new event in DB
  create: (req, res) => {
    const db = req.app.get('db');
    let { start_hour, end_hour, day, month, year, description, user_id } = req.body;
    db.create_event([start_hour, end_hour, day, month, year, description, user_id])
      .then( response => res.status(200).send())
      .catch( err => console.log(err));
  },
  // PUT "/api/event/:id" - edits event w/ given id
  edit: (req, res) => {
    let { id } = req.params;
    const db = req.app.get('db');

    db.get_event([id])
      .then( response => {
        let data = Object.assign({}, response[0], req.body);
        let { start_hour, end_hour, day, month, year, description } = data;

        db.edit_event([id, start_hour, end_hour, day, month, year, description])
          .then( response => res.status(200).send(response[0]) )
          .catch();
      })
      .catch( err => res.status(404).send(err.message));

  },
  // DELETE "/api/event/:id" - deletes event w/ id
  delete: (req, res) => {
    let { id } = req.params;
    const db = req.app.get('db');

    db.delete_event([id])
      .then( response => res.status(200).send(response))
      .catch( err => res.status(404).send(err.message));
  }
}

