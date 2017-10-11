<template>
    <div>
        <cart></cart>
        <product-list></product-list>
    </div>
</template>

<script>
import ProductList from './product-list/ProductList.vue'
import Cart from './cart/Cart.vue'

export default {
    name: 'product',
    components: { ProductList, Cart }
}
</script>

<style>

</style>