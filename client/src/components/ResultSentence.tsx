import React from 'react';

interface ResultSentence {
    result: string;
}

const ResultSentence: React.FC<ResultSentence> = ({result}) => {

    return <div>
        <h1>{result}</h1>
    </div>
}

export default ResultSentence;