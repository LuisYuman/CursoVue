const { createApp } = Vue;

// Input básico
createApp({
    data() {
        return { message: '' }
    }
}).mount('#form-input');

// Textarea
createApp({
    data() {
        return { message: '' }
    }
}).mount('#form-textarea');

// Checkbox simple
createApp({
    data() {
        return { checked: false }
    }
}).mount('#form-checkbox');

// Múltiples checkboxes
createApp({
    data() {
        return { checkedNames: [] }
    }
}).mount('#form-checkbox-array');

// Radio
createApp({
    data() {
        return { picked: '' }
    }
}).mount('#form-radio');

// Select simple
createApp({
    data() {
        return { selected: '' }
    }
}).mount('#form-select');

// Select múltiple
createApp({
    data() {
        return { selected: [] }
    }
}).mount('#form-select-multiple');

// Select con opciones dinámicas
createApp({
    data() {
        return {
            selected: 'A',
            options: [
                { text: 'Uno', value: 'A' },
                { text: 'Dos', value: 'B' },
                { text: 'Tres', value: 'C' }
            ]
        }
    }
}).mount('#form-select-dynamic');

// Checkbox con true-value y false-value
createApp({
    data() {
        return { toggle: 'no' }
    }
}).mount('#form-checkbox-values');

// Radio con valor dinámico
createApp({
    data() {
        return {
            pick: '',
            a: 'valor-dinamico'
        }
    }
}).mount('#form-radio-dynamic');

// Select con objeto como valor
createApp({
    data() {
        return { selected: { number: 0 } }
    }
}).mount('#form-select-object');

// Modificadores lazy, number y trim
createApp({
    data() {
        return {
            msg: '',
            age: null,
            msgTrim: ''
        }
    }
}).mount('#form-modifiers');