import { defineStore } from 'pinia';
import api from '../api';

export const useProductionStore = defineStore('production', {
    state: () => ({
        products: [],
        rawMaterials: [],
        productionSuggestions: []
    }),
    actions: {
        async fetchData() {
            const [productsRes, materialsRes] = await Promise.all([
                api.get('/products'),
                api.get('/raw-materials')
            ]);
            this.products = productsRes.data;
            this.rawMaterials = materialsRes.dat
        },
        async getBestProduction(){
            const response = await api.get('/production/suggestion');
            this.productionSuggestions = response.data;
        }
    }
})