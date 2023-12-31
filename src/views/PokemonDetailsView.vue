<script setup lang="ts">
import PokemonSummary from '@/components/pokemon/PokemonSummary.vue'
import { getPokemon } from '@/services/pokemonServices'
import type { GetPokemonResType } from '@/types/pokemonType'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import VueLoadImage from 'vue-load-image'
import PokemonBaseStats from '@/components/pokemon/PokemonBaseStats.vue'
import PokemonAbilities from '@/components/pokemon/PokemonAbilities.vue'
import Loading from '@/components/commons/Loading.vue'
import BackButton from '@/components/commons/BackButton.vue'
import { toast, type ToastOptions } from 'vue3-toastify'

const isLoading = ref(false)
const pokemon = ref<GetPokemonResType>(null!)
const isError = ref(false)
const { params, fullPath } = useRoute()
const router = useRouter()

const fetchPokemon = async () => {
    try {
        isLoading.value = true
        const data = await getPokemon(Number(params.id))
        pokemon.value = data
    } catch (e) {
        isError.value = true
        if (String(e).includes('Data not found')) {
            router.push({
                name: 'not-found',
                params: {
                    pathMatch: fullPath.substring(1).split('/')
                }
            })
        } else {
            toast.error(String(e), {
                position: toast.POSITION.BOTTOM_RIGHT,
            } as ToastOptions)
        }
    } finally {
        isLoading.value = false
    }
}

const pokemonTypes = computed(() => {
    return pokemon.value?.types.map(({ type }) => type.name).join('/')
})

onMounted(() => {
    fetchPokemon()
})

</script>
<template>
    <section>
        <Loading v-if="isLoading" class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <template v-else-if="!isLoading && !isError">
            <BackButton @on-back="$router.go(-1)" class="my-10">Back to list</BackButton>
            <div class="block md:grid md:grid-cols-2 md:gap-5">
                <div class="md:flex md:flex-col md:justify-between">
                    <div class="w-full flex flex-col items-center justify-center">
                        <div class="max-w-[14rem]">
                            <VueLoadImage>
                                <template v-slot:image>
                                    <img :src="pokemon?.image" alt="Image Pokemon">
                                </template>
                                <template v-slot:preloader>
                                    <img src="/pokemon-fallback.png" width="300" height="300" />
                                </template>
                            </VueLoadImage>
                        </div>
                        <p class="text-2xl font-bold text-purple-800 mt-8">{{ pokemon?.name }}</p>
                    </div>
                    <PokemonSummary :types="pokemonTypes" :height="pokemon?.height" :weight="pokemon?.weight"
                        class="mt-8" />
                </div>
                <div>
                    <PokemonBaseStats :stats="pokemon?.stats" class="mt-8" />
                    <PokemonAbilities :abilities="pokemon?.abilities" class="mt-8" />
                </div>
            </div>
        </template>
    </section>
</template>