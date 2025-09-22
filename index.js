const { createApp } = Vue;

// Renderización condicional: v-if y v-else
createApp({
    data() {
        return { ok: true }
    }
}).mount('#condicional-basic');

// Renderización condicional: v-if en template
createApp({
    data() {
        return { ok: true }
    }
}).mount('#condicional-template');

// Renderización condicional: v-else-if
createApp({
    data() {
        return { type: 'A' }
    },
    methods: {
        nextType() {
            const types = ['A', 'B', 'C', 'D'];
            let idx = types.indexOf(this.type);
            this.type = types[(idx + 1) % types.length];
        }
    }
}).mount('#condicional-elseif');

// Renderización condicional: key en inputs
createApp({
    data() {
        return { loginType: 'username' }
    },
    methods: {
        toggleType() {
            this.loginType = this.loginType === 'username' ? 'email' : 'username';
        }
    }
}).mount('#condicional-key');

// Renderización condicional: v-show
createApp({
    data() {
        return { ok: true }
    }
}).mount('#condicional-show');