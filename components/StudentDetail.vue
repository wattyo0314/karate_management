<template>
    <div class="item">
        <div>{{familyName}} {{firstName}} {{familyNameKana}} {{firstNameKana}}</div>
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
            },
            firstNameKana: {
                type: String,
                required: true
            },
            familyNameKana: {
                type: String,
                required: true
            }
        }
    }
</script>