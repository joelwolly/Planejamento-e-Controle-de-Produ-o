<template>
  <div class="card mt-4">
    <h3>Resgistro de Produto</h3>
    <form @submit.prevent="saveProduct">
      <div class="form-group mb-2">
        <label>Nome do Produto</label>
        <input v-model="product.name" type="text" class="form-control" placeholder="Ex: Chair" required>
      </div>
      <div class="form-group mb-2">
        <label>Codigo:</label>
        <input v-model="product.code" type="text" class="form-control" placeholder="Ex: CH-001" required>
      </div>
      <div class="form-group mb-2">
        <label>Preço de venda(R$):</label>
        <input v-model.number="product.price" type="number" step="0.01" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Salvar produto</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../api/index'; 

const product = ref({
  name: '',
  code: '',
  price: 0
});

const saveProduct = async () => {
  try {
    await api.post('/products', product.value);
    
    alert('Produto salvo com sucesso!');
    
    product.value = { 
      name: '', 
      code: '', 
      price: 0 
    };
  } catch (error) {
    console.error("Erro ao salvar produto:", error);
    alert('Erro ao salvar. Verifique se o código do produto já existe no Oracle.');
  }
};
</script>