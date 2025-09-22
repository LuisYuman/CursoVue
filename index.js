const { createApp } = Vue;

// Ejemplo base: botón contador
const componentsDemo = createApp({});
componentsDemo.component('button-counter', {
    data() {
        return { count: 0 }
    },
    template: `<button @click="count++">Me ha pulsado {{ count }} veces.</button>`
});
componentsDemo.mount('#components-demo');

// Props: blog post simple
const blogPostDemo = createApp({});
blogPostDemo.component('blog-post', {
    props: ['title'],
    template: `<h3>{{ title }}</h3>`
});
blogPostDemo.mount('#blog-post-demo');

// Props dinámicas con v-for
const blogPostListDemo = createApp({
    data() {
        return {
            posts: [
                { id: 1, title: 'Mi viaje con Vue', content: 'Contenido 1' },
                { id: 2, title: 'Blogging con Vue', content: 'Contenido 2' },
                { id: 3, title: '¿Por qué Vue es tan divertido?', content: 'Contenido 3' }
            ]
        }
    }
});
blogPostListDemo.component('blog-post', {
    props: ['title', 'content'],
    template: `
        <div>
            <h3>{{ title }}</h3>
            <div v-html="content"></div>
        </div>
    `
});
blogPostListDemo.mount('#blog-post-list-demo');

// Props como objeto
const blogPostObjectDemo = createApp({
    data() {
        return {
            posts: [
                { id: 1, title: 'Mi viaje con Vue', content: 'Contenido 1' },
                { id: 2, title: 'Blogging con Vue', content: 'Contenido 2' },
                { id: 3, title: '¿Por qué Vue es tan divertido?', content: 'Contenido 3' }
            ]
        }
    }
});
blogPostObjectDemo.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
});
blogPostObjectDemo.mount('#blog-post-object-demo');

// Comunicación hijo-padre con eventos
const blogPostsEventsDemo = createApp({
    data() {
        return {
            posts: [
                { id: 1, title: 'Mi viaje con Vue', content: 'Contenido 1' },
                { id: 2, title: 'Blogging con Vue', content: 'Contenido 2' },
                { id: 3, title: '¿Por qué Vue es tan divertido?', content: 'Contenido 3' }
            ],
            postFontSize: 1
        }
    }
});
blogPostsEventsDemo.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button @click="$emit('enlarge-text', 0.1)">Agrandar texto</button>
            <div v-html="post.content"></div>
        </div>
    `
});
blogPostsEventsDemo.mount('#blog-posts-events-demo');

// v-model en componente personalizado
const customInputDemo = createApp({
    data() {
        return { searchText: '' }
    }
});
customInputDemo.component('custom-input', {
    props: ['value'],
    template: `
        <input
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
    `
});
customInputDemo.mount('#custom-input-demo');

// Slots
const slotDemo = createApp({});
slotDemo.component('alert-box', {
    template: `
        <div class="demo-alert-box">
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `
});
slotDemo.mount('#slot-demo');

// Componentes dinámicos
const dynamicDemo = createApp({
    data() {
        return { currentTab: 'tab-a' }
    },
    computed: {
        currentTabComponent() {
            return this.currentTab;
        }
    }
});
dynamicDemo.component('tab-a', {
    template: `<div>Contenido de Tab A</div>`
});
dynamicDemo.component('tab-b', {
    template: `<div>Contenido de Tab B</div>`
});
dynamicDemo.mount('#dynamic-demo');