<script setup lang="ts">
defineProps<{
    precent: string
}>()
</script>

<template>
    <div class="w-full h-3 bg-slate-100 rounded-lg overflow-x-hidden">
        <div class="h-3 bg-purple-900 rounded" :style="`width: ${precent}`"></div>
    </div>
</template>