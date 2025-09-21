const { createApp } = Vue;

// Ejemplo 1: Instancia Vue básica y reactividad
const data = { a: 1 };
const app = createApp({
    data() {
        return data;
    }
});
app.mount('#app');

// Ejemplo 2: Object.freeze (no reactivo)
const obj = Object.freeze({ foo: 'bar' });
createApp({
    data() {
        return obj;
    }
}).mount('#app-freeze');

// Ejemplo 3: Métodos y propiedades de instancia + hook created
const data2 = { a: 1 };
const appInstance = createApp({
    data() {
        return data2;
    },
    created() {
        console.log('a es: ' + this.a);
    }
});
const vm = appInstance.mount('#app-instance');

// Acceso a propiedades de instancia
console.log(vm.$data === data2); // true
console.log(vm.$el === document.getElementById('app-instance')); // true

// $watch ejemplo
if (vm.$watch) {
    vm.$watch('a', function (newValue, oldValue) {
        console.log('a cambió de', oldValue, 'a', newValue);
    });
}