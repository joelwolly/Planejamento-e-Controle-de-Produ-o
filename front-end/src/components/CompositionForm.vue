<template>
  <div class="card mt-4 shadow">
    <div class="card-header bg-primary text-white">
      <h3 class="mb-0">Engineering: Link Material to Product</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="saveComposition" class="form-row">
        
        <div class="form-group">
          <label>Target Product:</label>
          <select v-model="form.productId" class="form-control" required>
            <option :value="null" disabled>Choose a product...</option>
            <option v-for="p in products" :key="p.id" :value="p.id">
              {{ p.name }} ({{ p.code }})
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Raw Material:</label>
          <select v-model="form.materialId" class="form-control" required>
            <option :value="null" disabled>Choose a material...</option>
            <option v-for="m in materials" :key="m.id" :value="m.id">
              {{ m.name }} - Stock: {{ m.stockQuantity }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Quantity Required:</label>
          <input v-model.number="form.quantity" type="number" min="1" class="form-control" required>
        </div>

        <button type="submit" class="btn btn-success">Save Composition</button>
      </form>
    </div>
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
  quantity: 1 
});

onMounted(async () => {
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
});

const saveComposition = async () => {
  try {
   
    await api.post('/compositions', form.value);
    
    alert('Composition linked successfully!');
    
 
    form.value = { productId: null, materialId: null, quantity: 1 };
  } catch (error) {
    console.error("Error saving composition:", error);
    alert('Still getting error 500? Check if the Material and Product IDs exist in your Oracle DB.');
  }
};
</script>