<template>
  <ul>
    <li v-for="p in products" :key="p.id">
      {{ p.title }} - {{ p.price }}
      <br>
      <button
        :disabled="!p.inventory"
        @click="addToCart(p)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script src="./ProductList.js"></script>