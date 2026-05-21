<template>
    <div>
        <h3>All Posts</h3>

        <div v-if="loading">
            Loading....
        </div>
        <div v-else>
            <ul class="list-group">
                <li class="list-group-item" v-for="post in postList" :key="post.id">{{ post.title }}</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: "Posts",
    data() {
        return {
            postList: [],
            loading: false
        }
    },
    methods: {
        fetchPosts() {
            this.loading = true;
            fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
                .then(posts => this.postList = posts).catch(err => console.log(err)).finally(() => this.loading = false);
        },
    },

    mounted() {
        // ajax
        this.fetchPosts();
    }

}
</script>

<style scoped></style>