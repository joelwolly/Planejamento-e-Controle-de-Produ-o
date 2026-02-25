import { defineStore } from 'pinia'
import api from '../api'

export const useFactoryStore = defineStore('factory', {

    state: () => ({
        products: [],
        rawMatreials,
        rawMaterials: [],
    suggestions: []
    }),
    actions:{
        async fetch (){
            const [resProd, restMat] = await Promise.all([
                api.get('products'),
                api.get('/raw-materials')
            ])
            this.products = resProd.data
            this.rawMaterials = restMat.data
        },
        async getProductionSuggestion (){
            const res = await api.get('/production/suggestion')
            this.suggestions = res.data
        }
    }
})