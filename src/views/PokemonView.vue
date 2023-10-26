<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SearchInput from '@/components//commons/SearchInput.vue'
import PokemonCard from '@/components/pokemon/PokemonCard.vue'
import Loading from '@/components//commons/Loading.vue'
import { getPokemons } from '@/services/pokemonServices'
import type { PokemonType } from '@/types/pokemonType'
import { useInfiniteScroll } from '@/composables/useInfiniteScroll'
import { useRoute, useRouter } from 'vue-router'
import { toast, type ToastOptions } from 'vue3-toastify'

const isLoading = ref(false)
const pokemons = ref<PokemonType[]>([])
const scrollComponent = ref()

const limitPayloadReq = 12
const offsetPayloadReq = ref(0)
const searchPayloadReq = ref('')
const defaultSearch = ref('')

const isDataOut = ref(false)

const router = useRouter()
const { query } = useRoute()

const fetchPokemons = async () => {
    try {
        isLoading.value = true
        const { results: pokemonRes } = await getPokemons({
            limit: limitPayloadReq,
            offset: offsetPayloadReq.value,
            search: searchPayloadReq.value
        })

        pokemons.value = [...pokemons.value, ...pokemonRes]
        if (!pokemonRes.length) isDataOut.value = true
        else isDataOut.value = false
    } catch (e) {
        toast.error(String(e), {
            position: toast.POSITION.BOTTOM_RIGHT,
        } as ToastOptions)
    } finally {
        isLoading.value = false
    }
}

const handleLoadMorePokemons = () => {
    if (!isDataOut.value) {
        offsetPayloadReq.value = offsetPayloadReq.value + limitPayloadReq
        fetchPokemons()
    }
}

useInfiniteScroll(scrollComponent, handleLoadMorePokemons)

const handleSetQueryParamsSearch = (search: string) => {
    if (search) router.push({ path: '/', query: { search } })
    else router.replace({ path: '/' })
}

const handleGetQueryParamsSearch = () => {
    const searchQuery = String(query.search || '')

    if (searchQuery) {
        defaultSearch.value = searchQuery
        searchPayloadReq.value = searchQuery
    }
}

const handleSearch = (value: string) => {
    searchPayloadReq.value = value
    offsetPayloadReq.value = 0
    pokemons.value = []

    handleSetQueryParamsSearch(value)
    fetchPokemons()
}

onMounted(() => {
    handleGetQueryParamsSearch()
    fetchPokemons()
})

</script>

<template>
    <section>
        <div class="my-5">
            <SearchInput placeholder="Search by name" :default-value="defaultSearch" @on-search="handleSearch" />
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