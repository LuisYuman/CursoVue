const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: '',
            tasks: []
        }
    },
    computed: {
        completedCount() {
            return this.tasks.filter(t => t.completed).length;
        },
        pendingCount() {
            return this.tasks.filter(t => !t.completed).length;
        }
    },
    methods: {
        addTask() {
            const text = this.newTask.trim();
            if (text) {
                this.tasks.push({
                    id: Date.now(),
                    text,
                    completed: false
                });
                this.newTask = '';
            }
        },
        removeTask(id) {
            this.tasks = this.tasks.filter(t => t.id !== id);
        },
        loadTasks() {
            const saved = localStorage.getItem('tasks');
            if (saved) {
                this.tasks = JSON.parse(saved);
            }
        }
    },
    watch: {
        tasks: {
            handler(newTasks) {
                localStorage.setItem('tasks', JSON.stringify(newTasks));
            },
            deep: true
        }
    },
    mounted() {
        this.loadTasks();
    }
}).mount('#todo-app');