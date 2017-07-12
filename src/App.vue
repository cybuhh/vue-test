<template>
  <div id="app">
    <server-list :servers="servers"></server-list>
  </div>
</template>

<script>
import serverList from './components/server-list';

export default {
  name: 'app',
  components: {
    serverList,
  },
  data() {
    return {
      servers: [
        'localhost',
        'svp-encodertest-01.int.vgnett.no',
      ],
    };
  },
};
</script>
