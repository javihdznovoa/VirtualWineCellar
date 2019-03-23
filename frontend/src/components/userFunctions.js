import axios from 'axios'

export const register = newUser => {
    return axios 
        .post('http://127.0.0.1:5000/register', {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log("Registered")
        })
}

export const login = user => {
    return axios
        .post('http://127.0.0.1:5000/login', {
            username: user.username,
            password: user.password
        })
        .then(response => {
            console.log("Logged")
        })
}