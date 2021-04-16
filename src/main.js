import {
    createApp
} from 'vue'
import Todos from './api/todos'
import './assets/css/main.css'

const apiTodos = new Todos()

const app = createApp({
    data() {
        return {
            todos: [],
            form: {
                text: '',
                done: false
            }
        }
    },

    created() {
        this.fetchTodos()
    },

    methods: {
        async fetchTodos() {
            this.todos = await apiTodos.index()
        },
        async createTodo(){
            const data = await apiTodos.store(this.form)
            this.todos.push(data)

            this.form.text = ''
            this.form.done = false
        }
    }

})
app.mount('#app')