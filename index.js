const { createApp } = Vue;

// Ejemplo 1: Propiedad computada básica
createApp({
    data() {
        return { message: 'Hola' }
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    }
}).mount('#computed-basic');

// Ejemplo 2: Computed vs Método
createApp({
    data() {
        return { message: 'Vue' }
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        reverseMessage() {
            return this.message.split('').reverse().join('');
        }
    }
}).mount('#computed-method');

// Ejemplo 3: Computed con getter y setter
createApp({
    data() {
        return {
            firstName: 'Foo',
            lastName: 'Bar'
        }
    },
    computed: {
        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName;
            },
            set(newValue) {
                const names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names.slice(1).join(' ');
            }
        }
    }
}).mount('#computed-setter');

// Ejemplo 4: Watcher (observador)
createApp({
    data() {
        return {
            question: '',
            answer: 'No puedo darte una respuesta hasta que hagas una pregunta!'
        }
    },
    watch: {
        question(newQuestion) {
            this.answer = 'Esperando que deje de escribir...';
            this.debouncedGetAnswer();
        }
    },
    created() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    methods: {
        getAnswer() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Las preguntas suelen contener un signo de interrogación. ;-)';
                return;
            }
            this.answer = 'Pensando...';
            axios.get('https://yesno.wtf/api')
                .then(response => {
                    this.answer = _.capitalize(response.data.answer);
                })
                .catch(error => {
                    this.answer = '¡Error! No se pudo alcanzar la API. ' + error;
                });
        }
    }
}).mount('#watch-example');