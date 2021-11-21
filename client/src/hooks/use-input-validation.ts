import { ChangeEvent, useState } from 'react';

const useInputValidation = (validateInput: (value: string) => boolean) => {
    const [enteredValue, setEnteredValue] = useState('');

    const isValid = validateInput(enteredValue);

    function valueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setEnteredValue(e.target.value);
    }

    function reset() {
        setEnteredValue('');
    }

    return {
        value: enteredValue,
        isValid,
        valueChangeHandler,
        reset,
    }
}

export default useInputValidation;