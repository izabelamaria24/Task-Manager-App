import React, { useReducer, useContext, useEffect } from 'react'

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
} from './actions'

const initialState = {
  userLoading: true,
  user: null,
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  showSidebar: true,
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

      dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: data.user })
    } catch (error) {
      logout()
    }
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

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        login,
        register,
        getCurrentUser,
        displayAlert,
        clearAlert,
        toggleSidebar,
        addTask,
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
