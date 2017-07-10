<template>
  <div>
    <b-card no-block>
      <b-tabs ref="tabs" card>
        <b-tab v-for="item in servers" :key="item.id" :title="item">
          <server-item :title="item" />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  import serverItem from './server-item';

  export default {
    name: 'server-list',

    props: [
      'servers',
    ],

    components: {
      serverItem,
    },
  };
</script>
