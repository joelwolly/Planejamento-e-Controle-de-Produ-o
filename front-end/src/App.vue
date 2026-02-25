<template>
  <div class="container py-4">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
      <div class="container-fluid">
        <span class="navbar-brand">Autoflex</span>
        <div class="navbar-nav">
          <router-link to="/materiais" class="nav-link">Matérias Primas</router-link>
          <router-link to="/produtos" class="nav-link">Produtos</router-link>
          <router-link to="/composicao" class="nav-link">Composição</router-link>
          <router-link to="/sugestao" class="nav-link fw-bold text-warning">Sugestão de Lucro</router-link>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
</style>