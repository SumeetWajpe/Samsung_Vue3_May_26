<template>
    <h2>
        {{ productdetails.title }}
    </h2>
    <p>{{ productdetails.price }}</p>
    <p>{{ productdetails.likes }}</p>
    <p>{{ productdetails.rating }}</p>

</template>
<script>
export default {
    name: 'Product',
    props: {
        productdetails: {
            type: Object, // Product (model)
            required: true,
        },

    }
}
</script>