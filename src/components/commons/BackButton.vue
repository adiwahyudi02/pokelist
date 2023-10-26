<script setup lang="ts">
defineEmits<{
    (event: 'onBack'): void
}>()
</script>
<template>
    <button type="button" class="flex items-center gap-2" @click="$emit('onBack')">
        <svg class="w-4 h-4 text-purple-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4" />
        </svg>
        <p class="font-bold text-purple-800">
            <slot>Back</slot>
        </p>
    </button>
</template>
