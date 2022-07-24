import http from './http-commons'

class UserService {

    all() {
        return http.get('/users')
    }

    find(id) {
        return http.get(`/users/${id}`)
    }
    
    create(id, usr) {
        return http.post('users', usr)
    }

    update(id, usr) {
        return http.put(`/users/${id}`, usr)
    }

}

export default new UserService()