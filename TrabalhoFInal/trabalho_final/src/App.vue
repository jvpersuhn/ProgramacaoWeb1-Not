<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Empregados</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="salvar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="empregado.name">
          <label>Salario</label>
          <input type="number" placeholder="Salario" v-model="empregado.salary">
          <label>Idade</label>
          <input type="number" placeholder="Idade" v-model="empregado.age">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>Nome</th>
            <th>Salario</th>
            <th>Idade</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="empregado of empregados" :key="empregado.id">

            <td>{{ empregado.employee_name }}</td>
            <td>{{ empregado.employee_salary }}</td>
            <td>{{ empregado.employee_age }}</td>
            <td>
              <button @click="editar(empregado)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="deletar(empregado)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>
<script>

import Empregado from './service/empregados'

export default {

    data(){
      return {
        empregado: {
          "id": '',
          "name" : '',
          "salary": '',
          "age": ''
        },

        empregados: []
      }
    },

    mounted(){
      this.listar()
    },

    methods:{

      listar() {

        Empregado.listar().then(resposta => {
          this.empregados = resposta.data.data
        })
      },

      salvar(){
        if (!this.empregado.id){
          Empregado.salvar(this.empregado).then(resposta => {
            this.empregado = {}
            alert('Criado com sucesso', resposta.status)
            this.listar()
          })
        } else {
          Empregado.atualizar(this.empregado).then(resposta =>{
            this.empregado = {}
            alert('Alterado com sucesso', resposta.status)
            this.listar()
          })
        }
      },

      editar(empregado){
        this.empregado.name = empregado.employee_name
        this.empregado.salary = empregado.employee_salary
        this.empregado.age = empregado.employee_age
        this.empregado.id = empregado.id
      },

      deletar(empregado){
        if(confirm('Você deseja realmente deletar?')){

          Empregado.deletar(empregado.id).then(resposta =>{
            alert('Deletado com sucesso', resposta.status)
            this.listar()
          })
        }
      }
    }
}

</script>

<style>

</style>
