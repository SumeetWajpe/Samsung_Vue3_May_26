<template>
    <div>
        <h3>All Posts</h3>

        <div v-if="loading">
            Loading....
        </div>
        <div v-else>
            <ul class="list-group">
                <li class="list-group-item" v-for="post in postList" :key="post.id">
                    <RouterLink :to="{ name: 'postdetails', 
                    params: { postid: post.id } }">
                        {{ post.title }}
                    </RouterLink>

                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import useLoading from "../composables/useLoading";

let postList = reactive([]);
const { loading, startLoading, stopLoading } = useLoading();

function fetchPosts() {
    startLoading();
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
        .then((posts) => {
            postList = posts
        }).catch(err => console.log(err)).finally(function () {
            stopLoading();
        });
}

onMounted(function () {
    fetchPosts();
});
</script>

<style scoped></style>