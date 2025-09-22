const { createApp } = Vue;

// Escuchar eventos: contador simple
createApp({
    data() {
        return { counter: 0 }
    }
}).mount('#event-counter');

// Métodos manejadores de eventos
createApp({
    data() {
        return { name: 'Vue.js' }
    },
    methods: {
        saludar(event) {
            alert('Hola ' + this.name + '!');
            if (event) {
                alert(event.target.tagName);
            }
        }
    }
}).mount('#event-method');

// Métodos manejadores en línea
createApp({
    methods: {
        di(mensaje) {
            alert(mensaje);
        }
    }
}).mount('#event-inline');

// Acceso al evento DOM original
createApp({
    methods: {
        alertar(message, event) {
            if (event) event.preventDefault();
            alert(message);
        }
    }
}).mount('#event-original');

// Modificadores de eventos
createApp({
    data() {
        return { inputText: '' }
    },
    methods: {
        onSubmit() {
            alert('Formulario enviado: ' + this.inputText);
            this.inputText = '';
        },
        hazEsto() {
            alert('¡Evento modificado!');
        }
    }
}).mount('#event-modifiers');

// Modificadores de teclas
createApp({
    methods: {
        submit() {
            alert('¡Enter presionado!');
        },
        clear() {
            alert('¡Input limpiado!');
        },
        onCtrlClick() {
            alert('Ctrl + Click');
        },
        onCtrlExactClick() {
            alert('Ctrl Exacto');
        },
        onClickExact() {
            alert('Sin modificadores');
        }
    }
}).mount('#event-keys');

// Modificador de botón del ratón
createApp({
    methods: {
        leftClick() {
            alert('Click izquierdo');
        },
        rightClick() {
            alert('Click derecho');
        },
        middleClick() {
            alert('Click medio');
        }
    }
}).mount('#event-mouse');