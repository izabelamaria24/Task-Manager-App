import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT_SUCCESS,
  CLEAR_ALERT,
  SHOW_ALERT,
  TOGGLE_SIDEBAR,
  ADD_TASK_BEGIN,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
} from './actions'

const reducer = (state, action) => {
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'User registered successfully!',
    }
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'error',
      alertText: 'Register failed',
    }
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Successfully logged in!',
    }
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'error',
      alertText: 'Failed to log in!',
    }
  }

  if (action.type === GET_CURRENT_USER_BEGIN) {
    return { ...state, userLoading: true, showAlert: false }
  }

  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return { ...state, userLoading: false, user: action.payload }
  }

  if (action.type === LOGOUT_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertType: 'success',
      alertText: 'Successfully logged out!',
      userLoading: false,
      user: null,
    }
  }

  if (action.type === SHOW_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: action.payload.alertType,
      alertText: action.payload.alertText,
    }
  }

  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertType: '', alertText: '' }
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar }
  }

  if (action.type === ADD_TASK_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === ADD_TASK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Task added!',
    }
  }

  if (action.type === ADD_TASK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'error',
      alertText: 'Failed to add task!',
    }
  }
}

export default reducer
