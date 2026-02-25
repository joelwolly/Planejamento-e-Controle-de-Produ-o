<template>
  <div class="card mt-4 shadow">
    <div class="card-header bg-success text-white">
      <h3 class="mb-0">Sugestão de Produção Otimizada</h3>
    </div>
    <div class="card-body">
      <button @click="loadSuggestions" class="btn btn-outline-success mb-3">
        Gerar Nova Sugestão de Lucro
      </button>

      <table class="table table-striped" v-if="data.suggestions.length > 0">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Código</th>
            <th>Qtd. Sugerida</th>
            <th>Preço Unit.</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data.suggestions" :key="item.productCode">
            <td>{{ item.productName }}</td>
            <td>{{ item.productCode }}</td>
            <td>{{ item.quantity }}</td>
            <td>R$ {{ item.unitPrice.toFixed(2) }}</td>
            <td class="fw-bold">R$ {{ item.totalValue.toFixed(2) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-dark">
            <td colspan="4" class="text-end">VALOR TOTAL ESTIMADO:</td>
            <td class="text-warning fw-bold">R$ {{ data.grandTotal.toFixed(2) }}</td>
          </tr>
        </tfoot>
      </table>
      
      <div v-else class="alert alert-info">
        Clique no botão para calcular a melhor produção baseada no estoque atual.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../api/index';

const data = ref({
  suggestions: [],
  grandTotal: 0
});

const loadSuggestions = async () => {
  try {
    const res = await api.get('/suggestions');
    data.value = res.data;
  } catch (error) {
    console.error("Erro ao calcular sugestões:", error);
    alert('Verifique se você cadastrou Matérias-Primas e Composições primeiro!');
  }
};
</script>