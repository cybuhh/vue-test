<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <server-list></server-list>
  </div>
</template>

<script>
import serverList from './components/server-list';

export default {
  name: 'app',
  components: {
    serverList,
  },
};
</script>
