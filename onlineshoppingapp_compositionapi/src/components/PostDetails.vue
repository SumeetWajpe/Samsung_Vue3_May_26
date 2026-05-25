<template>
    <div>
        <h2>Post details for {{ postid }}</h2>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const { params: { postid } } = route;

</script>

<style scoped></style>