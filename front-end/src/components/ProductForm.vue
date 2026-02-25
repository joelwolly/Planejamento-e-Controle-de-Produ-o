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
import { productApi } from '../api/products';

const product = ref({
  name: '',
  code: '',
  price: 0
});

const saveProduct = async () => {
  try {
    await productApi.create(product.value);
    alert('Product saved successfully!');
    product.clear(); 
    product.value = { name: '', code: '', price: 0 };
  } catch (error) {
    console.error("Error saving product:", error);
  }
};
</script>