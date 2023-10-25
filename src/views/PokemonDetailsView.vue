<script setup lang="ts">
import { getPokemon } from '@/services/pokemonServices'
import type { GetPokemonResType } from '@/types/pokemonType'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const isLoading = ref(false)
const pokemon = ref<GetPokemonResType>(null!)

const { params } = useRoute();

const fetchPokemon = async () => {
    try {
        isLoading.value = true
        const data = await getPokemon(Number(params.id))
        pokemon.value = data
    } catch (e) {
        console.log(e)
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    fetchPokemon()
})

</script>
<template>
    <h1>Pokemon Detail</h1>
</template>