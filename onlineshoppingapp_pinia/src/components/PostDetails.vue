<template>
    <div>
        <h2>Post details for {{ postid }}</h2>
    </div>
    <main class="border border-2 p-2">
        <p>User Id : {{ postData.post.userId }} </p>
        <p>Title : {{ postData.post.title }} </p>
        <p>Body : {{ postData.post.body }} </p>

    </main>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";

const postData = reactive({
    post: {}
});
const route = useRoute();
const { params: { postid } } = route;
onMounted(async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);

        postData.post = await response.json()
    } catch (error) {

    }
})
</script>

<style scoped></style>