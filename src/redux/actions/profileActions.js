import {
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
} from "../actions/types"

// Create a profile
export const createProfileAction = (profileData, history) => dispatch => {

};

// Get all profiles
export const getProfilesAction = () => dispatch => {
  dispatch(setProfileLoadingAction());

};

// Get the current profile
export const getCurrentProfileAction = () => dispatch => {
  dispatch(setProfileLoadingAction());

};

// Profile loading
export const setProfileLoadingAction = () => {
  return {
    type: PROFILE_LOADING
  }
};

// Clear profile
export const clearCurrentProfileAction = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
};