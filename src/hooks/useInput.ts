import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

type ElementType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type InputEventType = ChangeEvent<ElementType>;
type RetrunTypes<T> = [T, (e: InputEventType) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = string>(initalData: T): RetrunTypes<T> => {
	const [value, setValue] = useState(initalData);
	const onChangeValue = useCallback((e: InputEventType) => setValue(e.target.value as unknown as T), []);

	return [value, onChangeValue, setValue];
};

export default useInput;
