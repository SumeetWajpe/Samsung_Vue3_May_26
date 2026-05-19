<template>
    <h2>
        {{ name }}
    </h2>
</template>
<script>
export default {
    name: 'Product',
    props: {
        name: String,
    }
}
</script>