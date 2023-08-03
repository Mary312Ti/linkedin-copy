import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export const loginApi = (email, password) => {
    try {
        let responce = signInWithEmailAndPassword(auth, email, password)
        return responce
    } catch (error) {
        return error;
    }
}

export const registerApi = (email, password) => {
    try {
        let responce = createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        
    }
}