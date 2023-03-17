import * as bcrypt from 'bcrypt'

export const hashString = async (str: string): Promise<string> => {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(str, salt)

    return hash
}
