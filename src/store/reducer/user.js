import update        from 'immutability-helper';
import { UserTypes } from '../actions/user';

const initialState = {
    users: [],
};

const fetchSucceeded = (action, state) => {
    const user = action.user;

    return update(state, {
        users: {
            $set: {
                [user.userId]: user,
            },
        },
    });
};

export default function (state = initialState, action) {
    switch (action.type) {
        // @formatter:off
        case UserTypes.FETCH_SUCCEEDED: return fetchSucceeded(action, state);
        default:                        return state;
        // @formatter:on
    }
}