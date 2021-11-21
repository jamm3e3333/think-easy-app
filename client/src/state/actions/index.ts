import { ActionType } from '../action-types';

interface Payload {
    key: string;
    option: string;
}

interface WriteOption {
    type: ActionType.ADD_OPTION;
    payload: Payload;
}

interface DeleteOption {
    type: ActionType.DELETE_OPTION;
    payload: string;
}

interface DeleteAll {
    type: ActionType.DELETE_ALL;
}

export type Action = 
| WriteOption
| DeleteOption
| DeleteAll;