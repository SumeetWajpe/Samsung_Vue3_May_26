<script setup>
import { computed, ref, watch } from 'vue'

const count = ref(10);
watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to  ${newValue}`);
})
const increment = () => count.value++

</script>

<template>
    <div>
        <p>Count : {{ count }}</p>
        <button @click="increment">++</button>

    </div>
</template>