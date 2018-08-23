/* Remember we exported the FETCH_WEATHER variable in action/index.js (line 8) */
import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    /* if the case is the same as the action.type from action/index.js (line 19)
        then run this code */
    case FETCH_WEATHER:
      /* When you do a search in the searchbar, the only thing we care about is the data property */
      /* The concat method creates a new array that contains the old data + the new data, does NOT change the existing one */
      return state.concat([action.payload.data]);
  }
  return state;
}
