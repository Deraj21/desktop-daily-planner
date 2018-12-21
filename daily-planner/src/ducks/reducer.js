let initialState = {
  currentDate: {
    year: 2018,
    month: 12,
    monthName: "December",
    day: 14,
    weekDay: "Friday"
  }
}

const UPDATE_DATE = "UPDATE_DATE";

export default function reducer(state = initialState, action){
  let { type, payload } = action;
  switch(type){
    case UPDATE_DATE:
      return {...state, date: payload}
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
