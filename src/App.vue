<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 body,html,.app{
   width: 100%;
   height: 100%;
 }
  .app{
    font-size: 0.16rem;
  }
  body,h1,h2,h3,h4,h5,h6,p,ol,ul,li,dd{
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
