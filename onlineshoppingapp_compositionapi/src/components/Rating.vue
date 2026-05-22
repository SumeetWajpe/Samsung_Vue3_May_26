<template>
    <div>

        <i v-for="star in maxRating" :key="star"
            :class="['fa-star', star <= rating ? 'yellow-star fa-solid' : 'fa-regular']"> </i>


    </div>
</template>

<script setup>
import { defineProps } from "vue"
defineProps({
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    maxRating: {
        type: Number,
        default: 5
    }
})
</script>

<style scoped>
.yellow-star {
    color: rgb(234, 178, 74)
}
</style>