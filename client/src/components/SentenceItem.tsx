import React, { useRef, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import useInputValidation from '../hooks/use-input-validation';
import { ActionType } from '../state/action-types/index';
import { useTypedSelector } from '../hooks/use-typed-selector';

import Button from './UI/Button';
import Card from './UI/Card';
import classes from './SentenceItem.module.css';

interface SentenceItemProps {
    path: string;
}

const SentenceItem: React.FC<SentenceItemProps> = ({path}) => {
    const [deleteIsVisible, setDeleteIsVisible] = useState(false);
    const dispatch = useDispatch();
    const sentenceInputRef = useRef<HTMLInputElement>(null);
    const sentences = useTypedSelector(state => state.sentence);

    const {
        value,
        isValid,
        valueChangeHandler: sentenceItemChangeHandler,
        reset,
    } = useInputValidation(value => value.trim() !== '');


    useEffect(() => {
        const temp: boolean = sentences[path] !== '';
        if(!temp) setDeleteIsVisible(false);
        else setDeleteIsVisible(true);

    }, [sentences, path]);

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
        <Card className={classes['sentence-item--card']}>
            <form onSubmit={submitSentenceItem}>
                <h2 className={classes['sentence-item--path']}>{path}?</h2>
                <input 
                    className={classes['sentence-item--input']}
                    onChange={sentenceItemChangeHandler}
                    ref={sentenceInputRef}
                    value={value}
                    type="text"
                    maxLength={100}
                />
                <Button 
                    type="submit"
                    title={deleteIsVisible ? 'Change Option' : 'Add Option'}
                    disabled={!isValid}
                />
                {deleteIsVisible && 
                <Button 
                    type='button'
                    title={'Delete Option'} 
                    onClick={deleteOptionHandler} 
                />}
                {sentences[path] && <><p className={classes['sentence-item--option']}>your option:</p><p>{sentences[path]}</p></>}
            </form>
        </Card>
    )
}

export default SentenceItem;