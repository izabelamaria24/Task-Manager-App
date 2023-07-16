import React, { useReducer, useContext } from 'react'

import reducer from './reducer'

import axios from 'axios'

import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './actions'

const initialState = {
  user: null,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const login = () => {
  //   dispatch(LOGIN_USER_BEGIN)

  //   try {
  //     // const {data} = axios.post("/api/v1/auth/login", user)
  //   }

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
