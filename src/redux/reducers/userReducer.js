import {
  SET_PASSENGER_DATA,
  SET_UPDATED_POST,
  SET_USER_DETAILS,
} from "../constants";

const initialState = {
  userDetails: [],
  passengers: [],
  updatedPost: {},
};

export default function userData(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DETAILS:
      return { ...state, userDetails: action.payload };
    case SET_PASSENGER_DATA:
      return { ...state, passengers: action.payload };
    case SET_UPDATED_POST:
      return { ...state, updatedPost: action.payload };
    default:
      return state;
  }
}
