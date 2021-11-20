import { ChangeEvent, useState } from 'react';

const useInputValidation = (validateInput: (value: string) => boolean) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateInput(enteredValue);
    const hasError = !isValid && isTouched;

    function valueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setEnteredValue(e.target.value);
    }

    function valueBlurHandler() {
        setIsTouched(true);
    }

    function reset() {
        setIsTouched(false);
        setEnteredValue('');
    }

    return {
        value: enteredValue,
        isValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset,
    }
}

export default useInputValidation;