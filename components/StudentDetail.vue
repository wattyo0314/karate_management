<template>
    <div class="item">
        <div>名前: {{firstName}}</div>
    </div>
</template>

<script>
    export default {
        name: "StudentDetail",
        props: {
            firstName: String,
            required: true,
        }
    }
</script>