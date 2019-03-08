const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let NOW = new Date(Date.now());

let initialState = {
  currentDate: {
    year: NOW.getFullYear(),
    month: NOW.getMonth(),
    monthName: monthNames[NOW.getMonth()],
    day: NOW.getDate(),
    weekDay: dayNames[NOW.getDay()]
  },
  // ex: { date: 27, day: 0, month: 6, year: 1902, events: Array(0) }
  monthData: [[], [], [], [], [], []],
  user: {
    first_name: "Jared",
    last_name: "Tanner",
    email: "deraj21@gmail.com",
    background_color: "palegreen"
  },
  currentBackgroundColor: "gainsboro",
  isDualView: false,
  isMonthlyView: true
}

// whatchamacallits
const UPDATE_DATE = "UPDATE_DATE",
      UPDATE_CURRENT_BACKGROUND_COLOR = "UPDATE_CURRENT_BACKGROUND_COLOR",
      UPDATE_IS_DUAL_VIEW = "UPDATE_IS_DUAL_VIEW",
      UPDATE_IS_MONTHLY_VIEW = "UPDATE_IS_MONTHLY_VIEW",
      UPDATE_MONTH_DATA = "UPDATE_MONTH_DATA";

// reducer
export default function reducer(state = initialState, action){
  let { type, payload } = action;
  switch(type){
    case UPDATE_DATE:
      return {...state, date: payload}
    case UPDATE_CURRENT_BACKGROUND_COLOR:
      return {...state, currentBackgroundColor: payload}
    case UPDATE_IS_DUAL_VIEW:
      return {...state, isDualView: payload}
    case UPDATE_IS_MONTHLY_VIEW:
      return {...state, isMonthlyView: payload}
    case UPDATE_MONTH_DATA:
      return {...state, monthData: payload}
    default:
      return {...state};
  }
}

// action creators
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

export function updateIsDualView(val){
  return {
    type: UPDATE_IS_DUAL_VIEW,
    payload: val
  }
}

export function updateIsMonthlyView(val){
  return {
    type: UPDATE_IS_MONTHLY_VIEW,
    payload: val
  }
}

export function updateMonthData(data){
  return {
    type: UPDATE_MONTH_DATA,
    payload: data
  }
}
