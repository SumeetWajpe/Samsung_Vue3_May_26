<script setup>
import { computed, ref } from 'vue'

const count = ref(10);
const square = computed(() => count.value * count.value)
const increment = () => count.value++

</script>

<template>
    <div>
        <p>Count : {{ count }}</p>
        <p>Square : {{ square }}</p>
        <button @click="increment">++</button>
    </div>
</template>