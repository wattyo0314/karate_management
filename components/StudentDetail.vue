<template>
    <div class="item">
        <div>{{familyName}} {{firstName}}</div>
    </div>
</template>

<script>
    export default {
        name: "StudentDetail",
        props: {
            firstName: {
                type: String,
                required: true
            },
            familyName: {
                type: String,
                required: true
            }
        }
    }
</script>