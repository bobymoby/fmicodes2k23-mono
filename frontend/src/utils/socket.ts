import React from 'react'
import { io } from 'socket.io-client'
import { CONSTANTS } from '../constants'

export const socket = io(`http://${CONSTANTS.SERVER}`)
