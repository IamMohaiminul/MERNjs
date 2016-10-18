'use strict';

import { combineReducers } from 'redux';

import { authReducer } from './auth/reducers/authReducer.js';

import { allRoleReducer } from './roles/reducers/allRoleReducer.js';

import { allUserReducer } from './users/reducers/allUserReducer.js';
import { allUserRoleReducer } from './users/reducers/allUserRoleReducer.js';

const reducers = combineReducers({
	auth: authReducer,

	allRole: allRoleReducer,

	allUser: allUserReducer,
	allUserRole: allUserRoleReducer
});

export default reducers;
