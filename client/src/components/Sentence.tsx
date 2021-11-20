import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { SentencePaths } from '../routes/config';
import SentenceItem from './SentenceItem';

const Sentence: React.FC = () => {
    const [resultSenteceValid, setResultSentenceValid] = useState(false);
    const [resultString, setResultString] = useState('');

    const sentences = useTypedSelector(state => state.sentence);

    function resultHandler() {
        let temp = '';

        SentencePaths.forEach(path => {
            temp += `${sentences[path]} `;
        });
        temp = temp.trim().toUpperCase();
        setResultString(temp);
    }

    useEffect(() => {
        const resultValid = SentencePaths.every(path => {
            return sentences[path] !== '';
        });
        if(resultValid) setResultSentenceValid(true);
        else setResultSentenceValid(false);
    }, [sentences]);

    return (
        <>
            {SentencePaths.map(path => {
                return (
                    <div key={path}>
                        <SentenceItem path={path} />
                    </div>
                );
            })}
            <button disabled={!resultSenteceValid} onClick={resultHandler}>Result Sentence</button>
            {resultString && <h2>{resultString}.</h2>}
        </>
    )
}

export default Sentence;