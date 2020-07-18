import { GET_NOTES, ADD_FAIL, ADD_NOTE } from "../types";

export default (state, { type, payload }) => {
	switch (type) {
		case GET_NOTES:
			return {
				...state,
				notes: payload.data,
			};
		case ADD_NOTE:
			return {
				...state,
				notes: [...state.notes, payload.data],
			};
		case ADD_FAIL:
			return {
				...state,
				errors: payload,
			};
		default:
			return state;
	}
};
