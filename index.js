const { createApp } = Vue;

// Enlace de clases: Sintaxis de objeto
createApp({
    data() {
        return { isActive: false }
    }
}).mount('#class-object');

// Enlace de clases: Múltiples clases con objeto
createApp({
    data() {
        return {
            isActive: true,
            hasError: false
        }
    }
}).mount('#class-multi');

// Enlace de clases: Sintaxis de array
createApp({
    data() {
        return {
            isActive: true,
            activeClass: 'active',
            errorClass: 'text-danger'
        }
    }
}).mount('#class-array');

// Enlace de estilos: Sintaxis de objeto
createApp({
    data() {
        return {
            activeColor: 'red',
            fontSize: 16
        }
    }
}).mount('#style-object');

// Enlace de estilos: Sintaxis de array
createApp({
    data() {
        return {
            baseStyles: {
                color: 'black',
                fontWeight: 'bold'
            },
            overridingStyles: {
                color: 'blue'
            }
        }
    }
}).mount('#style-array');

// Enlace de estilos: Valores múltiples
createApp({}).mount('#style-multi');