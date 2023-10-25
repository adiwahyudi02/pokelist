<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from '@/components//commons/SearchInput.vue'
import PokemonCard from '@/components/pokemon/PokemonCard.vue'

const pokemons = ref([
    {
        "id": "1",
        "name": "bulbasaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
        "id": "2",
        "name": "ivysaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    },
    {
        "id": "3",
        "name": "venusaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
    },
    {
        "id": "4",
        "name": "charmander",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
        "id": "5",
        "name": "charmeleon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    },
    {
        "id": "6",
        "name": "charizard",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    },
    {
        "id": "7",
        "name": "squirtle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    {
        "id": "8",
        "name": "wartortle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
    },
    {
        "id": "9",
        "name": "blastoise",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
    },
    {
        "id": "10",
        "name": "caterpie",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
    },
    {
        "id": "11",
        "name": "metapod",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
    },
    {
        "id": "12",
        "name": "butterfree",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
    }
])

const handleSearch = (value: string) => { }

</script>

<template>
    <section>
        <div class="my-5">
            <SearchInput placeholder="Search by name" @on-search="handleSearch" />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" v-bind="pokemon" />
        </div>
    </section>
</template>