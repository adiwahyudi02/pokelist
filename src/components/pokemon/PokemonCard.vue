<script setup lang="ts">
import { RouterLink } from 'vue-router'
import VueLoadImage from 'vue-load-image'

defineProps<{
    image: string
    name: string
    id: string | number
}>()

</script>
<template>
    <div class="w-full p-4 bg-white border rounded-lg shadow">
        <div>
            <VueLoadImage>
                <template v-slot:image>
                    <img :src="image" alt="Image Pokemon">
                </template>
                <template v-slot:preloader>
                    <img src="/pokemon-fallback.png" width="300" height="300" />
                </template>
            </VueLoadImage>
        </div>
        <p class="truncate text-md text-center font-bold text-gray-700 my-3 ">
            {{ name }}
        </p>
        <RouterLink :to="`/detail/${id}`"
            class="block w-full py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300">
            See Details
        </RouterLink>
    </div>
</template>