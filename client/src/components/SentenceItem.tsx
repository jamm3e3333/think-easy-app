import React, { useRef, FormEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useInputValidation from '../hooks/use-input-validation';
import { ActionType } from '../state/action-types/index';
import { useTypedSelector } from '../hooks/use-typed-selector';

interface SentenceItemProps {
    path: string;
}

const SentenceItem: React.FC<SentenceItemProps> = ({path}) => {
    const dispatch = useDispatch();
    const sentenceInputRef = useRef<HTMLInputElement>(null);
    const sentences = useTypedSelector(state => state.sentence);

    const {
        value,
        isValid,
        hasError,
        valueChangeHandler: sentenceItemChangeHandler,
        valueBlurHandler: sentenceItemBlurHandler,
        reset,
    } = useInputValidation(value => value.trim() !== '');

    useEffect(() => {
        return () => reset();
    })

    function submitSentenceItem(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(!isValid) return;

        dispatch({
            type: ActionType.ADD_OPTION,
            payload: {
                option: value,
                key: path,
            }
        });

        reset();
    }

    function deleteOptionHandler() {
        dispatch({
            type: ActionType.DELETE_OPTION,
            payload: path,
        })
    }

    return (
        <>
            <form onSubmit={submitSentenceItem}>
                <label>{path}?</label>
                <input 
                    onChange={sentenceItemChangeHandler}
                    onBlur={sentenceItemBlurHandler}
                    ref={sentenceInputRef}
                    value={value}
                    type="text"
                    maxLength={100}
                />
                <button type="submit">Add Option</button>
                <button onClick={deleteOptionHandler}>Delete Option</button>
                {sentences[path] && <p>{sentences[path]}</p>}
            </form>
        </>
    )
}

export default SentenceItem;