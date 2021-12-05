import { combineReducers, createStore } from "redux";
import recorderReducer from "./recorder";
import userEventReudcer from "./user-events";

const rootReducer = combineReducers({
	userEvents: userEventReudcer,
	recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
