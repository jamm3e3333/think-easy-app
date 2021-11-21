import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/use-typed-selector';

import { SentencePaths } from '../routes/config';
import { ActionType } from '../state/action-types';

import Card from './UI/Card';
import Button from './UI/Button';
import classes from './ResultSentence.module.css';


const ResultSentence = () => {
    const [isComplete, setIsComplete] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const sentence = useTypedSelector(state => state.sentence);

    useEffect(() => {
        const temp = SentencePaths.every(path => {
            return sentence[path] !== '';
        });

        if(!temp) setIsComplete(false);
        else setIsComplete(true);
    }, [sentence]);

    function showResultHandle() {
        navigate('/result', {replace: true});
    }

    function deleteSentenceHandle() {
        dispatch({
            type: ActionType.DELETE_ALL,
        })
    }
    return (
        <>
            {isComplete &&
                <Card className={classes['result-sentence--card']}>
                    <Button 
                        onClick={showResultHandle}
                        title='Show Result Sentence'
                        type='button'
                    />
                    <Button 
                        onClick={deleteSentenceHandle}
                        title='Delete All'
                        type='button'
                    />
                </Card>
            }
        </>
    )
}

export default ResultSentence;