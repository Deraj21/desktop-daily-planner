module.exports = {
  // GET "/api/user/:id" - grabs user's data off session
  read: (req, res) => {
    console.log(`getting user:${req.session}`)
  },
  // POST "/api/user" - creates new user w/ auth0 data
  create: (req, res) => {
    let { id, first_name, last_name, email, background_color } = req.body;
    const db = req.app.get('db');

    db.create_user([id, first_name, last_name, email, background_color])
      .then( res.status(200).send('created user') )
      .catch( err => console.log(err.message));
  },
  // PUT "/api/user/:id" - edit user's data
  edit: (req, res) => {
    let { id } = req.params;
    let { background_color } = req.body;
    const db = req.app.get('db');

    db.edit_user([id, background_color])
      .then( res.status(200).send('user edited') )
      .catch( err => console.log(err.message) );
  }
}

//////////
// NEED TO MAKE QUREIES & FINISH ALL THREE ENDPOINTS
///////////////////