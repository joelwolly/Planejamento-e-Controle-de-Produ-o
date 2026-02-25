<template>
  <div class="card mt-4">
    <h3>Vincular Matéria Prima ao Produto</h3>
    <form @submit.prevent="saveComposition">
      <div class="form-group">
        <label>Selecione o Produto:</label>
        <select v-model="form.productId" required>
          <option v-for="p in products" :key="p.id" :value="p.id">{{ p.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Selecione a Matéria Prima:</label>
        <select v-model="form.materialId" required>
          <option v-for="m in materials" :key="m.id" :value="m.id">{{ m.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Quantidade Necessária:</label>
        <input v-model.number="form.requiredQuantity" type="number" required>
      </div>
      <button type="submit" class="btn btn-primary">Salvar Composição</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../api/index';

const products = ref([]);
const materials = ref([]);
const form = ref({ productId: null, materialId: null, requiredQuantity: 0 });


onMounted(async () => {
  const [pRes, mRes] = await Promise.all([
    api.get('/products'),
    api.get('/materials')
  ]);
  products.value = pRes.data;
  materials.value = mRes.data;
});

const saveComposition = async () => {
  try {
    await api.post('/compositions', form.value);
    alert('Composição salva!');
    form.value = { productId: null, materialId: null, requiredQuantity: 0 };
  } catch (error) {
    console.error("Erro na composição:", error);
  }
};
</script>