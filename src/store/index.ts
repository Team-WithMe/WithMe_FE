import { configureStore } from '@reduxjs/toolkit';
import { Reducer, AnyAction } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import { IRootState } from '@typings/reduxState';
import rootReducer from './rootReducer';

const isDev = process.env.NODE_ENV === 'development';

const createStore = () => {
	const store = configureStore({
		reducer: rootReducer as Reducer<IRootState, AnyAction>,
		devTools: isDev
	});
	return store;
};

const wrapper = createWrapper(createStore);
export default wrapper;
