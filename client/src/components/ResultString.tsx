import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SentencePaths } from '../routes/config';
import { useTypedSelector } from '../hooks/use-typed-selector';

import Button from './UI/Button';
import Card from './UI/Card';
import classes from './ResultString.module.css';

const ResultString = () => {
    const navigate = useNavigate();
    const sentence = useTypedSelector(state => state.sentence);
    let finalString = '';
    SentencePaths.forEach(path => {
        finalString += `${sentence[path]} `;
    });
    finalString = finalString.trim().toUpperCase();

    const navigateHomeHandler = useCallback(() => {
        navigate(`/${SentencePaths[0]}`, {replace: true});
    }, [navigate]);

    useEffect(() => {
        if(!finalString) navigateHomeHandler();
    }, [finalString, navigateHomeHandler]);

    return (
        <Card className={classes['result-string--card']}>
            <h1>{finalString}.</h1>
            <Button 
                onClick={navigateHomeHandler}
                className={classes['result-string--button']}
                type='button'
                title='Home'
            />
        </Card>
    )
}

export default ResultString;