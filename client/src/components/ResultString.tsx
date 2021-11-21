import { useNavigate } from 'react-router-dom';
import { SentencePaths } from '../routes/config';
import { useTypedSelector } from '../hooks/use-typed-selector';

const ResultString = () => {
    const navigate = useNavigate();
    const sentence = useTypedSelector(state => state.sentence);
    let finalString = '';
    SentencePaths.forEach(path => {
        finalString += `${sentence[path]} `;
    });
    finalString = finalString.trim().toUpperCase();

    function navigateHomeHandler() {
        navigate('/', {replace: true});
    }
    return (
        <>
            <button onClick={navigateHomeHandler}>Home</button>
            <h1>{finalString}.</h1>
        </>
    )
}

export default ResultString;