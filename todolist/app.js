var app = new Vue({
  el: '#app',
  data: {
    todos: [
      {
        name: 'Tâche n°1',
        completed: false
      }
    ],
    //J'initialise la data de newToDo
    newToDo: '',
    //Je sélectionne par défaut la puce "Toutes"
    filter: 'all',
    editing: null,
    oldTextTodo: ' '
  },
  methods: {
    addToDo() {
      //j'ajoute la nouvelle saisie de tâche dans mon tableau todos
      this.todos.push({
        completed: false,
        //la value sera égal à la saisie de l'input
        name: this.newToDo
      })
      //je réinitialise le contenu de l'input :v-model:newToDo
      this.newToDo = ''
    },
    deleteTodo(item) {
      this.todos = this.todos.filter(i => i !== item)
      //Si j'ai plusieurs todolist, je dissocie bien les tâches des unes des autres todolist
      this.$emit('input, this.todos')
    },
    //je supprime d'un coup toutes les tâches faite grâce au bouton destroy
    deleteCompleted() {
      this.todos = this.todos.filter(item => !item.completed)
      this.$emit('input, this.todos')
    },
    //pour éditer uniquement la tâche où je double-clic dessus
    editTodo(item) {
      this.editing = item
      this.oldTextTodo = item.name
    },
    //stop l'édition en cours de la tâche 
    doneEdit() {
      this.editing = null
    },
    //annule l'édition avec escape et 
    cancelEdit() {
      this.editing.name = this.oldTextTodo
      this.doneEdit()
    }
  },
  computed: {
    allDone: {
      get() {
        return this.remaining === 0
      },
      set(value) {
        //je coche toutes les tâches d'un coup
        this.todos.forEach(item => {
          item.completed = value
        })
      }
    },
    //je crée un objet "unique" qui compte le nombre de tâche à faire
    remaining() {
      //je retourne le nombre de tâche à faire selon le nombre d'objet non completed de mon tableau todos
      return this.todos.filter(item => !item.completed).length
    },
    //je retourne toutes les tâches faites
    todoCompleted() {
      return this.todos.filter(item => item.completed).length
    },
    hasTodos() {
      return this.todos.length > 0
    },
    //j'affiche la liste des tâches en fonction de conditions if/else if
    filteredTodos() {
      if (this.filter === 'todo') {
        return this.todos.filter(item => !item.completed)
      } else if (this.filter === 'done') {
        return this.todos.filter(item => item.completed)
      }
      return this.todos
    }
  },
  //on crée une nouvelle directive v-focus
  directives: {
    focus(el, value) {
      if (value) {
        //à la prochaine modification du DOM, effectue le code suivant :
        Vue.nextTick(() => {
          el.focus()
        })
      }

    }
  }
})


