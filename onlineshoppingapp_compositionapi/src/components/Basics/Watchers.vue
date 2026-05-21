<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const count = ref(10);
watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to  ${newValue}`);
})
const increment = () => count.value++

// onMounted(()=>{

// })

</script>

<template>
    <div>
        <p>Count : {{ count }}</p>
        <button @click="increment">++</button>

    </div>
</template>