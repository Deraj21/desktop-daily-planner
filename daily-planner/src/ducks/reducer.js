let initialState = {
  currentDate: {
    year: 2018,
    month: 12,
    monthName: "December",
    day: 14,
    weekDay: "Friday"
  },
  user: {
    first_name: "Jared",
    last_name: "Tanner",
    email: "deraj21@gmail.com",
    background_color: "palegreen"
  },
  currentBackgroundColor: "palegreen"
}

const UPDATE_DATE = "UPDATE_DATE",
      UPDATE_CURRENT_BACKGROUND_COLOR = "UPDATE_CURRENT_BACKGROUND_COLOR";

export default function reducer(state = initialState, action){
  let { type, payload } = action;
  switch(type){
    case UPDATE_DATE:
      return {...state, date: payload}
    case UPDATE_CURRENT_BACKGROUND_COLOR:
      return {...state, currentBackgroundColor: payload}
    default:
      return {...state};
  }
}

export function updateDate(date){
  return {
    type: UPDATE_DATE,
    payload: date
  }
}

export function updateCurrentBackgroundColor(color){
  return {
    type: UPDATE_CURRENT_BACKGROUND_COLOR,
    payload: color
  };
}
