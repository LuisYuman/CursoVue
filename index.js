const { createApp } = Vue;

// Array básico
createApp({
    data() {
        return {
            items: [
                { mensaje: 'Foo' },
                { mensaje: 'Bar' }
            ]
        }
    }
}).mount('#example-1');

// Array con índice y variable externa
createApp({
    data() {
        return {
            mensajePadre: 'Padre',
            items: [
                { mensaje: 'Foo' },
                { mensaje: 'Bar' }
            ]
        }
    }
}).mount('#example-2');

// Objeto
createApp({
    data() {
        return {
            object: {
                primerNombre: 'John',
                apellido: 'Doe',
                edad: 30
            }
        }
    }
}).mount('#v-for-object');

createApp({
    data() {
        return {
            object: {
                primerNombre: 'John',
                apellido: 'Doe',
                edad: 30
            }
        }
    }
}).mount('#v-for-object-keys');

// key único
createApp({
    data() {
        return {
            items: [
                { id: 1, mensaje: 'Uno' },
                { id: 2, mensaje: 'Dos' },
                { id: 3, mensaje: 'Tres' }
            ]
        }
    }
}).mount('#example-key');

// Métodos de mutación
createApp({
    data() {
        return {
            items: [
                { id: 1, mensaje: 'Elemento 1' },
                { id: 2, mensaje: 'Elemento 2' }
            ],
            nextId: 3
        }
    },
    methods: {
        addItem() {
            this.items.push({ id: this.nextId++, mensaje: 'Elemento nuevo' });
        }
    }
}).mount('#mutation-example');

// Filtrado con propiedad computada
createApp({
    data() {
        return {
            numeros: [1, 2, 3, 4, 5]
        }
    },
    computed: {
        numerosImpares() {
            return this.numeros.filter(n => n % 2 !== 0);
        }
    }
}).mount('#filtered-list');

// Rango
createApp({}).mount('#range-list');

// v-for en template
createApp({
    data() {
        return {
            items: [
                { mensaje: 'A' },
                { mensaje: 'B' },
                { mensaje: 'C' }
            ]
        }
    }
}).mount('#template-list');

// v-for con v-if
createApp({
    data() {
        return {
            todos: [
                { id: 1, text: 'Tarea 1', isComplete: false },
                { id: 2, text: 'Tarea 2', isComplete: true },
                { id: 3, text: 'Tarea 3', isComplete: false }
            ]
        }
    }
}).mount('#todos-list');

// Todo List con componente
const todoListApp = createApp({
    data() {
        return {
            newTodoText: '',
            todos: [
                { id: 1, title: 'Lavar los platos' },
                { id: 2, title: 'Sacar la basura' },
                { id: 3, title: 'Cortar el césped' }
            ],
            nextTodoId: 4
        }
    },
    methods: {
        addNewTodo() {
            if (this.newTodoText.trim() !== '') {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                });
                this.newTodoText = '';
            }
        }
    }
});
todoListApp.component('todo-item', {
    props: ['title'],
    template: `
        <li>
            {{ title }}
            <button @click="$emit('remove')">Eliminar</button>
        </li>
    `
});
todoListApp.mount('#todo-list-example');