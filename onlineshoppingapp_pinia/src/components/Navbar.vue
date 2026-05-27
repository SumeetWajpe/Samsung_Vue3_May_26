<template>
    <nav class="navbar bg-dark navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">Online Shopping App</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/">Products</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/dashboard/posts">Posts</RouterLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style></style>