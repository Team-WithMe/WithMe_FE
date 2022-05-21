import { AnyAction, CombinedState, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import { IRootState } from '@typings/reduxState';
import testSlice from '@store/test/test.slice';

const rootReducer = (state: IRootState, action: AnyAction): CombinedState<IRootState> => {
	switch (action.type) {
		case HYDRATE:
			return action.payload;
		default: {
			const combineReducer = combineReducers({
				test: testSlice
			});
			return combineReducer(state, action);
		}
	}
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
