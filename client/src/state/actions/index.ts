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

export type Action = 
| WriteOption
| DeleteOption;