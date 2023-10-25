<script setup lang="ts">
import type { PokemonAbility } from '@/types/pokemonType'

defineProps<{
    abilities: PokemonAbility[]
}>()
</script>

<template>
    <div class="w-full p-4 bg-white rounded-lg shadow">
        <p class="font-bold mb-7">Abilities</p>
        <ul class="list-disc ml-5 flex flex-wrap gap-8">
            <li v-for="ability in abilities" :key="ability.ability.name" class="font-semibold text-sm">
                {{ ability.ability.name }}
            </li>
        </ul>
    </div>
</template>