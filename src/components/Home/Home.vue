<template>
    <div class="zlf_home">
      <section>
        <router-view></router-view>
      </section>
      <Foot></Foot>
    </div>

</template>

<script>
  //引入 底部组件
  import Foot from "./Foot";
    export default {
        name: "Home.vue",
      components:{Foot}
    }
</script>

<style lang="scss" scoped>
  .zlf_home{
    display: flex;
    flex-direction: column;
    height: 100%;
    section{
      flex-grow: 1;
      overflow-y: auto;
    }

  }
</style>
