const { createApp } = Vue;

// Ejemplo con propiedad computada
createApp({
    data() {
        return { username: '' }
    },
    computed: {
        welcomeMessage() {
            return this.username
                ? `¡Bienvenido, ${this.username}!`
                : 'Por favor, escribe tu nombre.';
        }
    }
}).mount('#welcome-computed');

// Ejemplo con método
createApp({
    data() {
        return { username: '' }
    },
    methods: {
        getWelcomeMessage() {
            return this.username
                ? `¡Bienvenido, ${this.username}!`
                : 'Por favor, escribe tu nombre.';
        }
    }
}).mount('#welcome-method');