<template>
  <div class="min-vh-100 bg-light">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-5">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <span class="fw-bold fs-4 text-uppercase tracking-wider">Autoflex</span>
        </router-link>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ms-auto">
            <router-link to="/materiais" class="nav-link px-3">
              <i class="bi bi-box-seam me-1"></i> Raw Materials
            </router-link>
            
            <router-link to="/produtos" class="nav-link px-3">
              <i class="bi bi-cart me-1"></i> Products
            </router-link>
            
            <router-link to="/composicao" class="nav-link px-3">
              <i class="bi bi-diagram-3 me-1"></i> Engineering
            </router-link>
            
            <router-link to="/sugestao" class="nav-link px-3 ms-lg-2 fw-bold text-warning border border-warning rounded">
              <i class="bi bi-graph-up-arrow me-1"></i> Profit Suggestion
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-xxl-10">
          <router-view v-slot="{ Component }">
            <transition name="page-fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </main>

   
  </div>
</template>

<script setup>
const userFullName = "Joel Wollace Bezerra Santos";
</script>

