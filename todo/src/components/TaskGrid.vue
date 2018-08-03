<template>
    <div class="row">
        <app-task v-for="(task, index) in tasks" @click.native="deleteTask(index)">{{ task }}</app-task>
    </div>
</template>

<script>
    import Task from './Task.vue';

    export default {
        props: ['tasks'],
        components: {
            appTask: Task
        },
        methods: {
            deleteTask(index) {
                this.$emit('taskDeleted', index);
            }
        }
    }
</script>

<style scoped>

</style>