import { actionCreator } from './redux.js';
import * as Actions from './action_type.js';

export const increase = actionCreator(Actions.INCREASE_COUNTER);
export const asyncIncrease = actionCreator(Actions.ASYNC_INCREASE_COUNTER);
export const decrease = actionCreator(Actions.DECREASE_COUNTER);
export const setCounter = actionCreator(Actions.SET_COUNTER);
export const asyncRequest = actionCreator(Actions.ASYNC_REQUEST);
export const asyncResponse = actionCreator(Actions.ASYNC_RESPONSE);