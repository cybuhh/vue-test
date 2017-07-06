<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view></router-view>-->
    <task-list></task-list>
    <server-list></server-list>
  </div>
</template>

<script>
import TaskList from './components/Task-List';
import ServerList from './components/Server-List';

export default {
  name: 'app',
  components: {
    TaskList,
    ServerList,
  },
};
</script>
