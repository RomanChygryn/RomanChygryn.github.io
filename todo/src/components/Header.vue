<template>
    <div class="row">
        <div class="col-sm-12">
            <h1>Tasks Added</h1>
            <div class="progress">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60"
                        :style="{width:(taskCount / maxTasks) * 100 + '%'}">
                        {{ taskCount }} / {{ maxTasks }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'taskCount',
            'maxTasks'
        ]
    }
</script>

<style scoped>
    h1 {
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }
</style>