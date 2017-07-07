<template>
  <div>
    <button @click="triggerAction(appId, 'start')"><icon name="play" label="start"></icon></button>
    <button @click="triggerAction(appId, 'stop')"><icon name="stop" label="stop"></icon></button>
    <button @click="triggerAction(appId, 'restart')"><icon name="refresh" label="restart"></icon></button>
    <button @click="triggerAction(appId, 'scaleUp')"><icon name="plus" label="scale up"></icon></button>
    <button @click="triggerAction(appId, 'scaleDown')"><icon name="minus" label="scale down"></icon></button>
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
        console.log(appId, type);
      },
    },
  };
</script>
