import { get, post } from '../../utils/httpRequests';
import { APIs, INSTA_APIs } from '../../utils/apis';
import { looksRequest, looksSuccess, looksFailure, picksRequest, picksSuccess,
  picksFailure, categoriesRequest, categoriesSuccess, categoriesFailure,
  boutiquesRequest, boutiquesSuccess, boutiquesFailure, instaProfileRequest,
  instaProfileSuccess, instaProfileFailure } from './actions';

/**
 * Handler for Looks actions
 */
const looksHandler = () => (dispatch) => {
  dispatch(looksRequest());

  get({ url: APIs.HOME.LOOKS })
    .then((response) => {
      if (!response) {
        throw Error(response.statusText);
      }
      dispatch(looksSuccess(response.data));
    })
    .catch(() => dispatch(looksFailure(true)));
}

/**
 * Handler for Picks actions
 */
const picksHandler = () => (dispatch) => {
  dispatch(picksRequest(true));

  get({ url: APIs.HOME.PICKS })
    .then((response) => {
      if (!response) {
        throw Error(response.statusText);
      }
      dispatch(picksSuccess(response.data));
    })
    .catch(() => dispatch(picksFailure(true)));
}

/**
 * Handler for Categories actions
 */
const categoriesHandler = () => (dispatch) => {
  dispatch(categoriesRequest(true));

  get({ url: APIs.HOME.CATEGORIES })
    .then((response) => {
      if (!response) {
        throw Error(response.statusText);
      }
      dispatch(categoriesSuccess(response.data));
    })
    .catch(() => dispatch(categoriesFailure(true)));
}

/**
 * Handler for Boutiques actions
 */
const boutiquesHandler = () => (dispatch) => {
  dispatch(boutiquesRequest(true));

  get({ url: APIs.HOME.BOUTIQUES })
    .then((response) => {
      if (!response) {
        throw Error(response.statusText);
      }
      dispatch(boutiquesSuccess(response.data));
    })
    .catch(() => dispatch(boutiquesFailure(true)));
}

/**
 * Handler for Instagram Profile actions
 */
const instaProfileHandler = () => (dispatch) => {
  dispatch(instaProfileRequest(true));

  get({ url: INSTA_APIs.PROFILE })
    .then((response) => {
      if (!response) {
        throw Error(response.statusText);
      }
      dispatch(instaProfileSuccess(response.data.user.media.nodes));
    })
    .catch(() => dispatch(instaProfileFailure(true)));
}

export {
  looksHandler, picksHandler, categoriesHandler, boutiquesHandler,
  instaProfileHandler }
