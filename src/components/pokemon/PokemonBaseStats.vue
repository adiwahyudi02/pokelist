<script setup lang="ts">
import type { PokemonStat } from '@/types/pokemonType'
import Progress from '../commons/Progress.vue'

defineProps<{
    stats: PokemonStat[]
}>()
</script>

<template>
    <div class="w-full p-4 bg-white rounded-lg shadow">
        <p class="font-bold mb-7">Base Stats</p>
        <div v-for="stat in stats" :key="stat.stat.name" class="flex items-center justify-between gap-2 my-2">
            <p class="w-1/3 md:w-1/2 font-semibold text-sm">{{ stat.stat.name }}</p>
            <div class="w-full flex items-center gap-2">
                <p class="text-sm">{{ stat.base_stat }}</p>
                <Progress :precent="`${(stat.base_stat / 100) * 100}%`" />
            </div>
        </div>
    </div>
</template>