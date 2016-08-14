import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import toastr from 'toastr';

import config from '../../../../config';

/**
 * check user authentication from react router
 * @param nextState
 * @param replaceState
 * @returns void
 */
export function isAuthRouter (nextState, replaceState) {
  if (!cookie.load('x-access-token')) {
    toastr.warning('Need to login.');
    replaceState('/auth');
  }
};

/**
 * check guest from react router
 * @param nextState
 * @param replaceState
 * @returns void
 */
export function isGuestRouter (nextState, replaceState) {
  if (cookie.load('x-access-token')) {
    toastr.info('Already login');
    replaceState('/users');
  }
};

/**
 * trigger to logout for react-router
 * @param nextState
 * @param replaceState
 * @returns void
 */
export function logOutRouter (nextState, replaceState) {
  cookie.remove('x-access-token');
  toastr.success('Logout successfully');
  replaceState('/auth');
};

/**
 * check user authentication
 * @param nextState
 * @param replaceState
 * @returns boolean
 */
export function isAuth () {
  if (cookie.load('x-access-token')) {
    return true;
  } else {
    return false;
  }
};

/**
 * check user authentication
 * @param nextState
 * @param replaceState
 * @returns boolean
 */
export function isAuthWithFailTrigger () {
  if (cookie.load('x-access-token')) {
    return true;
  } else {
    toastr.warning('Need to login.');
    browserHistory.push('/auth');
  }
};

/**
 * get token from react cookie
 * @returns token
 */
export function getToken () {
  return cookie.load('x-access-token');
};
/**
 * set token to react cookie
 * @returns void
 */
export function setToken (token) {
  cookie.save('x-access-token', token, { expires: config.REACT_COOKIE.EXPIRES });
};
