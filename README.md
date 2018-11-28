# desktop-daily-planner
Simple daily planner; My first run at making an electron app

### Description:
- Will use:
  - React, create-react-app
  - Node, Express
  - DB stuff?
  - Electron, electron-quickstart?
- Interface:
  - Simple
  - The Goal is to get away from having to click an 'add event' button, and full out a form, just to jot down an event.
  - daily planner screen (at first, this will be the only screen)
    - will look like a lined piece of paper with hours on the left-hand side
    - lick on a line, and just start typing
    - once done typing, you can click and drag the line if needed
    - line becomes gray, and settings icon pops up where you can change the color, but just clicking will open it for editing it again
    - Maybe down the road, you can resize it to reflect the length of the event
    - monthly view (build after daily is completely done)
    - hows month, with first few words of the first few events on each day
    - buttons to go to next/prev months

### MVP
- Daily screen
  - ability to edit lines
  - ability to change color of a line
- Make it deployable as an electron app, and have it working on someone else's computer

### Post-MVP:
- data permanence (it saves stuff to a database or to the user's HD)
- Month screen
  - ability to choose a day, and have it displayed
- Users
  - login
  - stay logged in on same computer
- Simple deployability with instructions on the github of how to accomplish that
- Day screen
  - Ability to drag line to a different hour
  - ability to change the side of an event by pulling on the bottom or top

