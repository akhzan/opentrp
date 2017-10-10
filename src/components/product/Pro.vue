<template>
    <div>
        <cart></cart>
        <product></product>
    </div>
</template>

<script>
import Product from './Product.vue'
import Cart from './Cart.vue'

export default {
    name: 'pro',
    components: { Product, Cart }
}
</script>

<style>

</style>
