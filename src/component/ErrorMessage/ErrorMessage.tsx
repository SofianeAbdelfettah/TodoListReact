import React from 'react'
import { ERRORTYPE } from '../../types/types'

const ErrorMessage = ({ message, type }: { message: string; type: ERRORTYPE }) => {
  const error = (message: string) => (
    <p className="bg-red-300 rounded mt-3 text-center p-1">{message}</p>
  )
  const warning = (message: string) => (
    <p className="bg-yellow-300 rounded mt-3 text-center p-1">{message}</p>
  )
  const validation = (message: string) => (
    <p className="bg-green-300 rounded mt-3 text-center p-1">{message}</p>
  )
  const errorMessages = {
    error,
    warning,
    validation,
  }

  return errorMessages[type](message)
}

export default ErrorMessage
