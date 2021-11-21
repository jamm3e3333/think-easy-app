import React, { useEffect, useState } from 'react';
import classes from './Navigator.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';
import { SentencePaths } from '../routes/config';

const Navigator = () => {
    const [isStartPage, setIsStartPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);
    const [currentLocationIndex, setCurrentLocationIndex] = useState<number>(0);

    const location = useLocation();
    const navigate = useNavigate();    

    const navigateBackHandle = () => {
        navigate(`/${SentencePaths[currentLocationIndex-1]}`, {replace: true} );
    }

    const navigateForwardHandle = () => {
        navigate(`/${SentencePaths[currentLocationIndex+1]}`, {replace: true} );
    }

    useEffect(() => {
        const pathIndex = SentencePaths.findIndex(path => {
            return path === location.pathname.replace('/','');
        });
        setCurrentLocationIndex(pathIndex);
        if(!pathIndex) {
            setIsStartPage(false)
            setIsLastPage(true);
        } 
        else if(pathIndex === SentencePaths.length -1) {
            setIsLastPage(false);
            setIsStartPage(true);
        }
        else {
            setIsLastPage(true);
            setIsStartPage(true);
        }
    }, [location])

    return (
        <>
            {isStartPage && 
                <div 
                    className={`${classes.navigate} ${classes['navigate-left']}`}
                    onClick={navigateBackHandle}>
                    <ArrowLeft />
                </div>
            }
            {isLastPage && 
                <div
                className={`${classes.navigate} ${classes['navigate-right']}`}
                    onClick={navigateForwardHandle}>
                    <ArrowRight />
                </div>
            }
        </>
    )
}

export default Navigator;