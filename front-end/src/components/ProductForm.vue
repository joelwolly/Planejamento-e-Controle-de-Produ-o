<template>
  <div class="card mt-4">
    <h3>Product Registration</h3>
    <form @submit.prevent="saveProduct">
      <div class="form-group mb-2">
        <label>Product Name</label>
        <input v-model="product.name" type="text" class="form-control" placeholder="Ex: Chair" required>
      </div>
      <div class="form-group mb-2">
        <label>Code:</label>
        <input v-model="product.code" type="text" class="form-control" placeholder="Ex: CH-001" required>
      </div>
      <div class="form-group mb-2">
        <label>Sale Price (R$):</label>
        <input v-model.number="product.price" type="number" step="0.01" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Save Product</button>
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
    
    alert('Product saved successfully!');
    
    product.value = { 
      name: '', 
      code: '', 
      price: 0 
    };
  } catch (error) {
    console.error("Error saving product:", error);
    alert('Error saving. Check if the product code already exists in Oracle.');
  }
};
</script>