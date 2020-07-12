import { http } from './config'

export default {

    listar:() => {
        return http.get('employees')
    },

    salvar:(empregado) => {
        return http.post('create', empregado)
    },

    atualizar:(empregado) => {
        return http.put('update/' + empregado.id, empregado)
    },

    deletar:(id) => {
        return http.delete('delete/' + id)
    }
}