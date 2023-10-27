<script setup lang="ts">
defineProps<{
    percent: string
}>()
</script>

<template>
    <div id="capacity-progress" class="w-full h-3 bg-slate-100 rounded-lg overflow-x-hidden">
        <div id="value-progress" class="h-3 bg-purple-900 rounded" :style="`width: ${percent}`"></div>
    </div>
</template>