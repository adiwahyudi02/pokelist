<script setup lang="ts">
defineProps<{
    types?: string
    height?: number
    weight?: number
}>()
</script>

<template>
    <div class="w-full flex p-4 bg-purple-100 rounded-lg">
        <div v-if="types" class="flex-1 flex flex-col items-center justify-between gap-2">
            <p class="font-bold text-sm">{{ types }}</p>
            <p class="text-xs text-gray-600">Type</p>
        </div>
        <div v-if="height" class="flex-1 flex flex-col items-center justify-between gap-2">
            <p class="text-lg font-bold">{{ height }} m</p>
            <p class="text-xs text-gray-600">Height</p>
        </div>
        <div v-if="weight" class="flex-1 flex flex-col items-center justify-between gap-2">
            <p class="text-lg font-bold">{{ weight }} kg</p>
            <p class="text-xs text-gray-600">Weight</p>
        </div>
    </div>
</template>