import { createRouter, createWebHistory } from 'vue-router'
import PokemonView from '@/views/PokemonView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'pokemon-list',
            component: PokemonView
        },
        {
            path: '/detail/:id',
            name: 'pokemon-details',
            component: () => import('@/views/PokemonDetailsView.vue')
        }
    ]
})

export default router
