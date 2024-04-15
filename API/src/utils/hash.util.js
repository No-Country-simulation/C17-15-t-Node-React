import { genSaltSync, compareSync, hashSync } from "bcrypt";

export const createHash = (password) => {
    const salt = genSaltSync(10)
    const hassPassword = hashSync(password, salt)
    return hassPassword
}

export const isValidPass = (password, dbPassword) => {
    const isValid = compareSync(password, dbPassword)
    return isValid
}