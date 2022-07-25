//import http from './http-commons'
import axios from 'axios'

class UserService {

    all() {
        return axios.get('/api/users')
    }

    find(id) {
        return axios.get(`/api/users/${id}`)
    }
    
    create(usr) {
        return axios.post('/api/users', usr)
    }

    update(id, usr) {
        return axios.put(`/api/users/${id}`, usr)
    }

}

export default new UserService()
