<template>
  <div>
    <b-table :fields="fields" :items="items">
      <template slot="index" scope="data">
        {{data.index + 1}}
      </template>
      <template slot="actions" scope="data">
        <app-actions :appId="data.item.pid" />
      </template>
    </b-table>
  </div>
</template>

<script>
  import appActions from './app-actions';

  export default {
    name: 'server-item',
    props: [
      'title',
    ],
    components: {
      appActions,
    },
    data() {
      return {
        fields: {
          pid: {
            label: 'PID',
          },
          app: {
            label: 'Application',
          },
          uptime: {
            label: 'Uptime',
          },
          restarts: {
            label: 'Restarts',
          },
          online: {
            label: 'Online',
          },
          cpu: {
            label: 'Cpu',
          },
          mem: {
            label: 'Memory',
          },
          actions: {
            label: 'Actions',
          },
        },
        items: [
          {
            pid: 77,
            app: 'this is the app',
            uptime: 'a few secs',
            restarts: 33,
            online: 'awesome icon',
            cpu: '3.33%',
            mem: '33.31MB',
          },
        ],
      };
    },
};
</script>
