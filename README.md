# 🏭 Production Control System

Este é um sistema de controle industrial **Full-Stack** desenvolvido para gerenciar matérias-primas, produtos finais, fichas técnicas (Engenharia) e simulação de produção com base em estoque e prioridade de valor financeiro.

O projeto foi desenvolvido como parte de um **desafio técnico**, focado em boas práticas, separação de responsabilidades através de **API REST** e arquitetura baseada em repositórios.

---

## 🚀 Tecnologias Utilizadas

### 🎨 Front-end
- Vue.js 3 (Vite)
- Pinia (Gerenciamento de Estado)
- Bootstrap 5
- CSS Responsivo

### ⚙️ Back-end
- Java
- Quarkus
- Hibernate ORM com Panache
- DTO Pattern (Data Transfer Object)

### 🗄️ Banco de Dados
- Oracle Database (Docker Container)

---

## ⚙️ Funcionalidades Implementadas

### 📦 Matérias-Primas
- CRUD completo
- Controle de quantidade em estoque
- Identificação por SKU

### 🛒 Produtos
- CRUD completo
- Controle de preço
- Código único do produto

### 🧩 Engenharia (Ficha Técnica)
- Associação **N:N** entre Produtos e Matérias-Primas
- Definição da receita de fabricação

### 📈 Motor de Sugestão de Produção
Algoritmo que:

- Analisa o estoque atual
- Calcula a produção máxima possível
- Prioriza produtos com maior valor agregado
- Maximiza o valor total estimado de venda

### 💾 Persistência de Estado
- Integração com **Pinia**
- Mantém resultados das simulações entre navegações

---

## ▶️ Como Executar o Projeto Localmente

### ✅ Pré-requisitos

- Node.js (v18+)
- Java JDK (17 ou 21+)
- Maven
- Docker Desktop

---

## 🐳 1. Subindo o Banco de Dados

Via Docker Compose:

```bash
docker-compose up -d
