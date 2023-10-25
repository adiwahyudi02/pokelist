<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/commons/Header.vue'

</script>

<template>
    <div class="max-w-3xl mx-auto p-4">
        <Header />
        <main>
            <RouterView />
        </main>
    </div>
</template>