import axios from 'axios';

export const register = newUser => {
    return axios
    .post('/users/register', {
        fullname:newUser.fullname,
        username: newUser.username,
        password: newUser.password,
    })
    .then(res => {
        console.log('registered!!');
    })
}

export const login = user => {
        return axios
        .post('/users/login', {
            username: user.username,
            password: user.password
        })
        .then(res => {
            if(!res.data.hasOwnProperty('error'))
            {
                localStorage.setItem('usertoken', res.data);
                console.log('usertoken set!!');
                return res.data;
            }
            else
            {
                console.log(res.data['error']);
            }
        })
        .catch(err => {
            console.log(err);
        })
}
