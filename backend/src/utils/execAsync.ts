// const util = require('util')
// const exec = util.promisify(require('child_process').exec)
import { exec } from 'child_process'
import { promisify } from 'util'

export const execAsync = promisify(exec)
