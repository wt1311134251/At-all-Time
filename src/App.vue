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
  .van-tab--active {
    color: #fe873a!important;
    font-weight: 500;
}
.van-tab {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    box-sizing: border-box;
    min-width: 0;
    padding: 0 5px;
    color: #646566;
    font-size: .28rem!important;
    line-height: 44px;
    text-align: center;
    cursor: pointer;
}
</style>
