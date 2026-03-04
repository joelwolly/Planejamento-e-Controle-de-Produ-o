<template>
  <div class="card mt-4 shadow production-card">


    <div class="card-header production-header">
      <div class="header-content">
        <div>
          <h3 class="mb-1">Optimized Production Suggestion</h3>
         
        </div>

        <button
          @click="productionStore.fetchSuggestions"
          class="btn-generate"
          :disabled="productionStore.loading"
        >
          <span
            v-if="productionStore.loading"
            class="spinner-border spinner-border-sm"
          ></span>

          <i v-else class="bi bi-cpu-fill"></i>

          {{ productionStore.loading
            ? 'Calculating...'
            : 'Generate Suggestion'
          }}
        </button>
      </div>
    </div>


    <div class="card-body">

      <table
        class="table table-striped"
        v-if="productionStore.suggestions.length > 0"
      >
        <thead>
          <tr>
            <th>Product</th>
            <th>Code</th>
            <th>Suggested Qty</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="item in productionStore.suggestions"
            :key="item.productCode"
          >
            <td>{{ item.productName }}</td>
            <td>{{ item.productCode }}</td>
            <td>{{ item.quantity }}</td>
            <td>R$ {{ item.unitPrice.toFixed(2) }}</td>
            <td class="fw-bold">
              R$ {{ item.totalValue.toFixed(2) }}
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr class="table-dark">
            <td colspan="4" class="text-end">
              ESTIMATED TOTAL VALUE:
            </td>
            <td class="text-warning fw-bold">
              R$ {{ productionStore.grandTotal.toFixed(2) }}
            </td>
          </tr>
        </tfoot>
      </table>


      <div
        v-else
        class="empty-state"
      >
        Click <strong>Generate Suggestion</strong> to calculate the best
        production plan.
      </div>

    </div>
  </div>
</template>

<script setup>
import { useProductionStore } from '../stores/productionStore';

const productionStore = useProductionStore();
</script>