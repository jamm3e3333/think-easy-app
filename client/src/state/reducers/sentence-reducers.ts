import { ActionType } from '../action-types/index';
import { Action } from '../actions/index';
import { SentencePaths } from '../../routes/config';

const initialState: Record<string, string> | undefined = {};

SentencePaths.map((path: string) => {
    return initialState[path] = '';
});

const reducer = (
    state: any = initialState,
    action: Action) => {
        switch(action.type) {
            
            case ActionType.ADD_OPTION:
                const actualState = {...state};
                actualState[action.payload.key] = action.payload.option;
                return actualState;

            case ActionType.DELETE_OPTION:
                const stateToDelete = {...state};
                stateToDelete[action.payload] = '';
                return stateToDelete;

            default: return state;
        }
    }

export default reducer;