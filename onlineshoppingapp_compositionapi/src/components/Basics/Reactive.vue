<template>
    <div>
        {{ state.count }}
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

const state = reactive({
    count: 100,
    person: {
        name: "Novak Djokovic",
        sport: "Tennis"
    }
});

onMounted(() => {
    state.count++;
})
</script>
