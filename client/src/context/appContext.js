import React, { useReducer, useContext, useEffect, useParams } from 'react'

import reducer from './reducer'

import axios from 'axios'

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
  SHOW_ALERT,
  CLEAR_ALERT,
  TOGGLE_SIDEBAR,
  ADD_TASK_BEGIN,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  GET_LISTS_BEGIN,
  GET_LISTS_SUCCESS,
  SHOW_MODAL,
  CLOSE_MODAL,
  GET_TASKS_BEGIN,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  ADD_LIST_BEGIN,
  ADD_LIST_SUCCESS,
  ADD_LIST_ITEM_BEGIN,
  ADD_LIST_ITEM_SUCCESS,
  GET_SINGLE_LIST_BEGIN,
  GET_SINGLE_LIST_SUCCESS,
  UPDATE_TASK_COMPLETED,
  UPDATE_TASK_START,
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  SEND_FRIEND_REQUEST_BEGIN,
  SEND_FRIEND_REQUEST_SUCCESS,
} from './actions'

const initialState = {
  userLoading: true,
  user: null,
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  showSidebar: true,
  lists: [],
  modal: false,
  activeList: {},
  tasks: [],
  totalScore: 0,
  friendRequests: 0,
  users: [],
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const authFetch = axios.create({
    baseURL: '/api/v1/auth',
  })

  const tasksFetch = axios.create({
    baseURL: '/api/v1/tasks',
  })

  const listsFetch = axios.create({
    baseURL: '/api/v1/lists',
  })

  const socialFetch = axios.create({
    baseURL: '/api/v1/social',
  })

  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) logout()
      return Promise.reject(error)
    }
  )

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const displayAlert = (alertType, alertText) => {
    dispatch({ type: SHOW_ALERT, payload: { alertType, alertText } })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const logout = async () => {
    await authFetch.get('/logout')
    dispatch({ type: LOGOUT_SUCCESS })
    clearAlert()
  }

  const register = async (user) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const { data } = await authFetch.post('/register', user)

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR })
    }
    clearAlert()
  }

  const login = async (user) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const { data } = await authFetch.post('/login', user)

      console.log(user)
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user })
    } catch (error) {
      dispatch({ type: LOGIN_USER_ERROR })
    }
    clearAlert()
  }

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN })
    try {
      const { data } = await authFetch.get('/getCurrentUser')

      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: {
          user: data.user,
          totalScore: data.totalScore,
          friendRequests: data.friendRequests,
        },
      })
    } catch (error) {
      logout()
    }
  }

  const getUsers = async (query) => {
    dispatch({ type: GET_USERS_BEGIN })
    try {
      const { data } = await authFetch.get('/getUsers', {
        params: { query: query },
      })

      dispatch({ type: GET_USERS_SUCCESS, payload: data })
    } catch (error) {
      console.log(error)
    }
  }

  const sendFriendRequest = async (userTo) => {
    dispatch({ type: SEND_FRIEND_REQUEST_BEGIN })

    try {
      const { data } = await socialFetch.post(`/${userTo}`)

      console.log(data)

      dispatch({ type: SEND_FRIEND_REQUEST_SUCCESS, payload: data })
    } catch (error) {
      console.log(error)
    }

    clearAlert()
  }

  const addTask = async (task) => {
    dispatch({ type: ADD_TASK_BEGIN })

    try {
      await tasksFetch.post('/', task)
      dispatch({ type: ADD_TASK_SUCCESS })
    } catch (error) {
      dispatch({ type: ADD_TASK_ERROR })
    }

    clearAlert()
  }

  const getTasks = async () => {
    dispatch({ type: GET_TASKS_BEGIN })

    try {
      const { data } = await tasksFetch.get('/')

      dispatch({ type: GET_TASKS_SUCCESS, payload: data.tasks })
    } catch (error) {
      dispatch({ type: GET_TASKS_ERROR })
    }
  }

  const getLists = async () => {
    dispatch({ type: GET_LISTS_BEGIN })

    try {
      const { data } = await listsFetch.get('/')
      dispatch({ type: GET_LISTS_SUCCESS, payload: data.lists })
    } catch (error) {
      console.log(error)
    }
  }

  const addListItem = async (listItemDescription, listId) => {
    dispatch({ type: ADD_LIST_ITEM_BEGIN })
    try {
      await listsFetch.post(`/${listId}`, { listItemDescription })

      dispatch({ type: ADD_LIST_ITEM_SUCCESS })
    } catch (error) {
      console.log(error)
    }
  }

  const addList = async (listName, listItems) => {
    dispatch({ type: ADD_LIST_BEGIN })

    try {
      const { data } = await listsFetch.post('/', { listName })

      listItems.map((listItem) => {
        addListItem(listItem, data.list._id)
      })

      dispatch({ type: ADD_LIST_SUCCESS })
    } catch (error) {
      console.log(error)
    }

    clearAlert()
  }

  const getSingleList = async (listId) => {
    dispatch({ type: GET_SINGLE_LIST_BEGIN })

    try {
      const { data } = await listsFetch.get(`/${listId}`)

      dispatch({
        type: GET_SINGLE_LIST_SUCCESS,
        payload: { list: data.list.listName, listItems: data.listItems },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateTask = async (updatedTask) => {
    dispatch({ type: UPDATE_TASK_START })
    try {
      const { data } = await tasksFetch.patch(
        `/${updatedTask._id}`,
        updatedTask
      )

      dispatch({ type: UPDATE_TASK_COMPLETED, payload: data.totalScore })
    } catch (error) {
      console.log(error)
    }
  }

  const displayModal = () => {
    dispatch({ type: 'SHOW_MODAL' })
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  useEffect(() => {
    getCurrentUser()
    getLists()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        login,
        logout,
        register,
        getCurrentUser,
        displayAlert,
        clearAlert,
        toggleSidebar,
        addTask,
        getLists,
        displayModal,
        closeModal,
        addList,
        addListItem,
        getSingleList,
        getTasks,
        updateTask,
        getUsers,
        sendFriendRequest,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
