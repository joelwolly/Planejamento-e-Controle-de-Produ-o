import { defineStore } from 'pinia';
import api from '../api/index';

export const useProductionStore = defineStore('production', {
  state: () => ({
    suggestions: [],
    grandTotal: 0,
    loading: false
  }),
  actions: {
    async fetchSuggestions() {
      this.loading = true;
      try {
        const res = await api.get('/suggestions');
        this.suggestions = res.data.suggestions;
        this.grandTotal = res.data.grandTotal;
      } catch (error) {
        console.error("Erro ao carregar sugestões:", error);
        alert('Verifique as matérias-primas e composições no banco!');
      } finally {
        this.loading = false;
      }
    }
  }
});