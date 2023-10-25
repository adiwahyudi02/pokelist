<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import SearchInput from '@/components//commons/SearchInput.vue'
import PokemonCard from '@/components/pokemon/PokemonCard.vue'
import Loading from '@/components//commons/Loading.vue'
import { getPokemons } from '@/services/pokemonServices'
import type { PokemonType } from '@/types/pokemonType'


const isLoading = ref(false)
const pokemons = ref<PokemonType[]>([])
const scrollComponent = ref()

const limitPayloadReq = 12
const offsetPayloadReq = ref(0)
const searchPayloadReq = ref('')

const fetchPokemons = async () => {
    try {
        isLoading.value = true
        const { results: pokemonRes } = await getPokemons({
            limit: limitPayloadReq,
            offset: offsetPayloadReq.value,
            search: searchPayloadReq.value
        })

        pokemons.value = [...pokemons.value, ...pokemonRes]
    } catch (e) {
        console.log(e)
    } finally {
        isLoading.value = false
    }
}

const handleLoadMorePokemons = () => {
    offsetPayloadReq.value = offsetPayloadReq.value + limitPayloadReq
    fetchPokemons()
}

const handleScroll = () => {
    let element = scrollComponent.value

    if (element && element.getBoundingClientRect().bottom < window.innerHeight) {
        handleLoadMorePokemons()
    }
}

const handleSearch = (value: string) => { }

onMounted(() => {
    fetchPokemons()
})

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

</script>

<template>
    <section>
        <div class="my-5">
            <SearchInput placeholder="Search by name" @on-search="handleSearch" />
        </div>
        <div ref="scrollComponent" class="pb-28">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" v-bind="pokemon" />
            </div>
            <Loading v-if="isLoading" class="mt-8" />
            <p v-if="!isLoading && !pokemons.length" class="mt-8 text-lg font-bold text-purple-700 text-center">
                No data found
            </p>
        </div>
    </section>
</template>