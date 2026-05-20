<template>
    <div>
        <h3>All Posts</h3>
    </div>
</template>

<script>
export default {
    name: "Posts",
    methods: {
        fetchPosts() {
            fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
            .then(posts => console.log(posts))
        },
    },

    mounted() {
        // ajax
        this.fetchPosts();
    }

}
</script>

<style scoped></style>