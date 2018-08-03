<template>
        <div class="container">
            <app-header :taskCount="tasks.length" :maxTasks="maxTasks"></app-header>
            <app-new-task @taskAdded="newTask"></app-new-task>
            <app-task-grid :tasks="tasks" @taskDeleted="deleteTask"></app-task-grid>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <div class="alert alert-info">
                        Info: Click on a Task to delete it!
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import TaskGrid from './components/TaskGrid.vue';
    import NewTask from './components/NewTask.vue';
    import Header from './components/Header.vue';

    export default {

        data: function () {
            return {
                tasks: [],
                maxTasks: 6
            }
        },
        components: {
            appTaskGrid: TaskGrid,
            appNewTask: NewTask,
            appHeader: Header
        },
        methods: {
            newTask(task) {
                if (this.tasks.length < this.maxTasks) {
                    if (task.length > 0) {
                        this.tasks.push(task);
                    }
                    else {
                        alert('Please write something')
                    }
                }
                else {
                    alert('Please finish some tasks first!');
                }
            },
            deleteTask(index) {
                this.tasks.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
