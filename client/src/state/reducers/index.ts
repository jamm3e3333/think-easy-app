import { combineReducers } from 'redux';
import sentenceReducers from './sentence-reducers';

const reducers = combineReducers({
    sentence: sentenceReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;