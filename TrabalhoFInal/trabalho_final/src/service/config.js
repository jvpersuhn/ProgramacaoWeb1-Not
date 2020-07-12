import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://rest-api-employees.jmborges.site/api/v1/'
})