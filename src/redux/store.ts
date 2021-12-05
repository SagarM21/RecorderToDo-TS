import { combineReducers, createStore } from "redux";
import userEventReudcer from "./user-events";

const rootReducer = combineReducers({
	userEvents: userEventReudcer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
