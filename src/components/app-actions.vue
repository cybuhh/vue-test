<template>
  <div>
    <a href="#" size="sm" @click.prevent="triggerAction(appId, 'start')"><icon name="play" label="start"></icon></a>
    <a href="#" size="sm" @click.prevent="triggerAction(appId, 'stop')"><icon name="stop" label="stop"></icon></a>
    <a href="#" size="sm" @click.prevent="triggerAction(appId, 'restart')"><icon name="refresh" label="restart"></icon></a>
    <a href="#" size="sm" @click.prevent="triggerAction(appId, 'scaleUp')"><icon name="plus" label="scale up"></icon></a>
    <a href="#" size="sm" @click.prevent="triggerAction(appId, 'scaleDown')"><icon name="minus" label="scale down"></icon></a>
  </div>
</template>

<script>
  import * as api from '../lib/pm2-api';

  export default {
    name: 'app-actions',
    props: [
      'server',
      'appId',
      'instances',
    ],

    computed: {
      href() {
        return `#${this.appId}`;
      },
    },
    methods: {
      async triggerAction(appId, type) {
        try {
          this.$emit('loading', true);
          const result = await api[type](this.server, appId, this.instances);
          window.console.info(result);
        } catch (error) {
          window.console.error('Error occured', error);
        } finally {
          this.$emit('loading', false);
        }
      },
    },
  };
</script>
