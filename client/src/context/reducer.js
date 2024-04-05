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
  GET_LISTS_BEGIN,
  GET_LISTS_SUCCESS,
  SHOW_MODAL,
  CLOSE_MODAL,
  ADD_LIST_BEGIN,
  ADD_LIST_SUCCESS,
  ADD_LIST_ITEM_BEGIN,
  ADD_LIST_ITEM_SUCCESS,
  GET_SINGLE_LIST_BEGIN,
  GET_SINGLE_LIST_SUCCESS,
  GET_TASKS_BEGIN,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  UPDATE_TASK_START,
  UPDATE_TASK_COMPLETED,
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  SEND_FRIEND_REQUEST_BEGIN,
  SEND_FRIEND_REQUEST_SUCCESS,
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
    const { user, totalScore, friendRequests } = action.payload

    console.log(friendRequests)
    return {
      ...state,
      userLoading: false,
      user,
      totalScore,
      friendRequests,
    }
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

  if (action.type === GET_LISTS_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === GET_LISTS_SUCCESS) {
    return { ...state, isLoading: false, lists: action.payload }
  }

  if (action.type === SHOW_MODAL) {
    return { ...state, modal: true }
  }

  if (action.type === CLOSE_MODAL) {
    return { ...state, modal: false }
  }

  if (action.type === ADD_LIST_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === ADD_LIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'List added successfully',
      modal: false,
    }
  }

  if (action.type === ADD_LIST_ITEM_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === ADD_LIST_ITEM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    }
  }

  if (action.type === GET_SINGLE_LIST_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === GET_SINGLE_LIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      activeList: {
        listName: action.payload.list,
        listItems: action.payload.listItems,
      },
    }
  }

  if (action.type === GET_TASKS_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === GET_TASKS_SUCCESS) {
    return { ...state, isLoading: false, tasks: action.payload }
  }

  if (action.type === UPDATE_TASK_START) {
    return { ...state, isLoading: true }
  }

  if (action.type === UPDATE_TASK_COMPLETED) {
    return { ...state, isLoading: false, totalScore: action.payload }
  }

  if (action.type === GET_USERS_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === GET_USERS_SUCCESS) {
    return { ...state, isLoading: false, users: action.payload.users }
  }

  if (action.type === SEND_FRIEND_REQUEST_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === SEND_FRIEND_REQUEST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Friend request sent',
    }
  }
}

export default reducer
