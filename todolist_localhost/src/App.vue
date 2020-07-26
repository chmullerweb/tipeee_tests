
<template>
<section class="todoapp">
<header class="header">
<h1>To Do List</h1>
<input type="text" class="new-todo" placeholder="Ajouter une tâche" :v-model="newToDo" @keyup.enter="addToDo">
</header>
<div class="main">
  <ul class="todo-list">
    <li class="todo" :v-for="todo in todos" :key="todo.name">
    <div class="view">
    <label> {{ todo.name }} </label>
    </div>
    </li>
  </ul>
</div>
</section>
</template>

<script>
export default {
  data () {
    return {
    todos: [
      { name: 'Tâche n°1' }
      // {completed: false}
    ],
    //J'initialise la data de newToDo
    newToDo: ''
  }
  },
  methods: {
    addToDo() {
      //j'ajoute la nouvelle saisie de tâche dans mon tableau todos
      this.todos.push({
        //completed: false,
        //la value sera égal à la saisie de l'input
        name: this.newToDo
      })
      //je réinitialise le contenu de l'input :v-model:newToDo
      this.newToDo = ''
    }
  }
}
</script>