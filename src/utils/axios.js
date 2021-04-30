import axios from 'axios'

export default axios.create({
    baseURL: 'https://fakeapi-json-server.herokuapp.com/'
})