<template>
  <div>
    <a href="#" @click="triggerAction(appId, 'start')" size="sm"><icon name="play" label="start"></icon></a>
    <a href="#" @click="triggerAction(appId, 'stop')" size="sm"><icon name="stop" label="stop"></icon></a>
    <a href="#" @click="triggerAction(appId, 'restart')" size="sm"><icon name="refresh" label="restart"></icon></a>
    <a href="#" @click="triggerAction(appId, 'scaleUp')" size="sm"><icon name="plus" label="scale up"></icon></a>
    <a href="#"  @click="triggerAction(appId, 'scaleDown')" size="sm"><icon name="minus" label="scale down"></icon></a>
  </div>
</template>

<script>
  export default {
    name: 'app-actions',
    props: [
      'appId',
    ],
    computed: {
      href() {
        return `#${this.appId}`;
      },
    },
    methods: {
      triggerAction(appId, type) {
        window.console.log(appId, type);
      },
    },
  };
</script>
