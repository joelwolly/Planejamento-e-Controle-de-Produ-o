<template>
  <div class="card mt-4">
    <h3>Engineering: Link Material to Product</h3>
    <form @submit.prevent="saveComposition">
      
      <div class="form-group mb-3">
        <label>Select Product:</label>
        <select v-model="form.productId" class="form-control" required>
          <option value="null" disabled>Choose a product...</option>
          <option v-for="p in products" :key="p.id" :value="p.id">
            {{ p.name }} ({{ p.code }})
          </option>
        </select>
      </div>

      <div class="form-group mb-3">
        <label>Select Raw Material:</label>
        <select v-model="form.materialId" class="form-control" required>
          <option value="null" disabled>Choose a material...</option>
          <option v-for="m in materials" :key="m.id" :value="m.id">
            {{ m.name }} - Stock: {{ m.stockQuantity }}
          </option>
        </select>
      </div>

      <div class="form-group mb-3">
        <label>Required Quantity:</label>
        <input 
          v-model.number="form.requiredQuantity" 
          type="number" 
          min="1" 
          class="form-control" 
          required
        >
      </div>

      <button type="submit" class="btn btn-primary w-100">
        Save Composition
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../api/index';

const products = ref([]);
const materials = ref([]);
const form = ref({ 
  productId: null, 
  materialId: null, 
  requiredQuantity: 1 
});

const loadInitialData = async () => {
  try {
    const [pRes, mRes] = await Promise.all([
      api.get('/products'),
      api.get('/materials')
    ]);
    products.value = pRes.data;
    materials.value = mRes.data;
  } catch (error) {
    console.error("Failed to load dependency data:", error);
  }
};

onMounted(loadInitialData);

const saveComposition = async () => {
  try {
    await api.post('/compositions', form.value);
    alert('Composition linked successfully!');
    
    form.value = { productId: null, materialId: null, requiredQuantity: 1 };
  } catch (error) {
    console.error("Error saving composition:", error);
    alert('Error saving. Please check the backend console.');
  }
};
</script>