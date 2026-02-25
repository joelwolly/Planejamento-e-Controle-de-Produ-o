<template>
  <div class="card">
    <h3>Cadastrar Matéria Prima</h3>
    <form @submit.prevent="saveMaterial">
      <div class="form-group">
        <label>Nome:</label>
        <input v-model="material.name" type="text" placeholder="Ex: Wood" required>
      </div>
      <div class="form-group">
        <label>Quantidade de estoque:</label>
        <input v-model.number="material.stockQuantity" type="number" required>
      </div>
      <button type="submit" class="btn btn-primary">Salvar no Banco</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../api/index';

const material = ref({ name: '', stockQuantity: 0 });

const saveMaterial = async () => {
  try {
    await axios.post('http://localhost:8080/api/materials', material.value);
    alert('Material saved successfully!');
    material.value = { name: '', stockQuantity: 0 };
  } catch (error) {
    console.error("Error saving:", error);
    alert('Erro ao salvar. Verifique o console do IntelliJ.');
  }
};
</script>