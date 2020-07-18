import { REGISTER_USER, REGISTER_FAIL } from '../types';

export default (state, { type, payload }) => {
	switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        token: payload
      }
      case REGISTER_FAIL:
        return {
          ...state,
          token: null,
          user: null,
          errors: payload
        }
		default:
			return state;
	}
};
