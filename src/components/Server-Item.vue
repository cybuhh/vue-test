<template>
  <div>
    <b-table :fields="fields" :items="items">
      <template slot="index" scope="data">
        <!-- A Virtul column -->
        {{data.index + 1}}
      </template>
      <template slot="name" scope="data">
        <!-- A custom formatted column -->
        {{data.value.first}} {{data.value.last}}
      </template>
      <template slot="nameage" scope="data">
        <!-- A Virtul composite column -->
        {{data.item.name.first}} is {{data.item.age}} years old
      </template>
    </b-table>
    <app-actions id="11" />
  </div>
</template>

<script>
  export default {
    name: 'server-item',
    props: [
      'title',
    ],
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
            pid: 1,
            app: 'this is the app',
            uptime: 'a few secs',
            restarts: 33,
            online: 'awesome icon',
            cpu: '3.33%',
            mem: '33.31MB',
            actions: '<icon name="beer"></icon>',
          },
        ],
      };
    },
};
</script>
