import { AnyAction, CombinedState, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import { IRootState } from '@typings/reduxState';
import hostSlice from '@store/host/host.slice';

const rootReducer = (state: IRootState, action: AnyAction): CombinedState<IRootState> => {
	switch (action.type) {
		case HYDRATE:
			return action.payload;
		default: {
			const combineReducer = combineReducers({
				host: hostSlice
			});
			return combineReducer(state, action);
		}
	}
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
