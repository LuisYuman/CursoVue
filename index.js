const { createApp } = Vue;

// Ejemplo 1: Interpolación de texto
createApp({
    data() {
        return { msg: '¡Hola desde Vue!' }
    }
}).mount('#app-text');

// Ejemplo 2: Interpolación única con v-once
createApp({
    data() {
        return { msg: 'Texto fijo' }
    }
}).mount('#app-once');

// Ejemplo 3: HTML puro con v-html
createApp({
    data() {
        return { rawHtml: '<strong>Texto en negrita</strong>' }
    }
}).mount('#app-html');

// Ejemplo 4: v-bind en atributos
createApp({
    data() {
        return {
            dynamicId: 'mi-id',
            isButtonDisabled: true
        }
    }
}).mount('#app-bind');

// Ejemplo 5: Expresiones JavaScript
createApp({
    data() {
        return {
            number: 5,
            ok: true,
            message: 'Vue',
            id: 10
        }
    }
}).mount('#app-expr');

// Ejemplo 6: Directiva v-if
createApp({
    data() {
        return { seen: true }
    }
}).mount('#app-if');

// Ejemplo 7: v-bind y v-on con argumentos y modo abreviado
createApp({
    data() {
        return { url: 'https://vuejs.org' }
    },
    methods: {
        doSomething() {
            alert('¡Botón clickeado!');
        }
    }
}).mount('#app-short');

// Ejemplo 8: Modificador .prevent
createApp({
    methods: {
        onSubmit() {
            alert('Formulario enviado (preventDefault aplicado)');
        }
    }
}).mount('#app-prevent');