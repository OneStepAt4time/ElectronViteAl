<script>
import TopMenu from './components/TopMenu.vue';
export default {
  name: 'App',
  components: {
    TopMenu,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    msg: String,
  },
};

</script>

<template>
  <div>
    <TopMenu />
  </div>
  <div class="layout-content">
    <div class="layout-content-inner">
      <router-view />
    </div>
  </div>
</template>

<style>
</style>
