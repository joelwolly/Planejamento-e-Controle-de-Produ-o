<template>
  <div class="card">
    <h3>Register Raw Material</h3>

    <form @submit.prevent="saveMaterial">

      <div class="form-group">
        <label>Name:</label>
        <input 
          v-model="material.name" 
          type="text" 
          placeholder="Ex: Wood" 
          required
        >
      </div>

      <div class="form-group">
        <label>SKU:</label>
        <input 
          v-model="material.sku" 
          type="text" 
          placeholder="Ex: MAT-001"
          required
        >
      </div>

      <div class="form-group">
        <label>Stock Quantity:</label>
        <input 
          v-model.number="material.stockQuantity" 
          type="number" 
          required
        >
      </div>

      <button type="submit" class="btn btn-primary">
        Save to Database
      </button>

    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../api/index';

const material = ref({
  name: '',
  sku: '',             
  stockQuantity: 0
});

const saveMaterial = async () => {
  try {
    await api.post('/materials', material.value);

    alert('Material saved successfully!');

    material.value = {
      name: '',
      sku: '',
      stockQuantity: 0
    };

  } catch (error) {
    console.error("Error saving:", error);
    alert('Error saving. Check IntelliJ console.');
  }
};
</script>