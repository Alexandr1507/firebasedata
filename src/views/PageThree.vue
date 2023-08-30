<template>
    <RouterLink to="page2">To Page2</RouterLink>
    <h1>Its Page 3</h1>
    <h2>(:-)</h2>
</template>
 
<script>
 export default {
   name: 'PageThree',
   data: () => {
     return {
   
     }
   }
 }
 
</script>
 
<style scoped>
h2{
    display: inline-block;
    font-size: 50px;
    transform: rotate(90deg);
}
   
</style>