<template>
    <div class="col-sm-6">
        <div class="panel panel-default">
            <div class="panel-body task">
                <p class="task-body">
                    <slot>

                    </slot>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .panel {
        border: none;
        background: rgba(255,255,255, .3);
        border-radius: 25px;
    }
    .panel-body {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        background: rgba(255,255,255, .5);
        border: none;
        border-radius: 25px;
        padding: 20px;
    }
    .task {
        cursor: pointer;
    }
    .task:hover {
        background-color: lavender;
    }
    .task-body {
        max-width: 100%;
        word-wrap: break-word;
    }
</style>