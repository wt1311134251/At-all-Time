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
</style>
