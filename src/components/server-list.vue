<template>
  <div>
    <b-card no-block>
      <b-tabs ref="tabs" card>
        <b-tab v-for="item in servers" :key="item.id" :title="item.name">
          <server-item :title="item.name">{{ item.details }}</server-item>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  import serverItem from './server-item';

  export default {
    name: 'server-list',
    components: {
      serverItem,
    },
    data() {
      return {
        servers: [
          { name: 'server name 1', details: 'server 1 details' },
          { name: 'server name 2', details: 'server 2 details' },
          { name: 'server name 3', details: 'server 3 details' },
          { name: 'server name 4', details: 'server 4 details' },
        ],
      };
    },
  };
</script>
