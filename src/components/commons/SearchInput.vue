<script setup lang="ts">
import { ref, watchEffect } from 'vue';

type SearchPropsType = {
    placeholder?: string
    buttonText?: string
    defaultValue?: string
}

const props = withDefaults(defineProps<SearchPropsType>(), {
    placeholder: 'Search',
    buttonText: 'Search'
})

const emit = defineEmits<{
    (event: 'onSearch', search: string): void
}>()

const search = ref('')

watchEffect(() => {
    if (props.defaultValue) search.value = props.defaultValue
})

</script>

<template>
    <form @submit.prevent="$emit('onSearch', search)">
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search" v-model="search" :placeholder="placeholder"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
            <button type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-purple-700 font-medium rounded-lg text-sm px-4 py-2 hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-300">
                {{ buttonText }}
            </button>
        </div>
    </form>
</template>