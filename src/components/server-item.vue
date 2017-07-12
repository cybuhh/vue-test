<template>
  <div v-if="uptime">
    <spinner v-show="loadingStatus" />
    <div class="jumbotron">
      <header>{{ hostname }}</header>
      <ul>
        <li>Uptime: {{ uptime }}</li>
        <li>CPUs: {{ cpus }}</li>
        <li>Processes: {{ items.length }}</li>
        <li>Mem: free {{ mem.free }} of {{ mem.total }} total</li>
        <li>Load avg: {{ loadavg[0].toFixed(2) }}, {{ loadavg[1].toFixed(2) }}, {{ loadavg[2].toFixed(2) }}</li>
      </ul>
      <a href="#" @click="triggerAction('all', 'start')" size="sm" title="Start all applications"><icon name="play" label="start"></icon></a>
      <a href="#" @click="triggerAction('all', 'stop')" size="sm" title="Stop all applications"><icon name="stop" label="stop"></icon></a>
      <a href="#" @click="triggerAction('all', 'restart')" size="sm" title="Restart all applications"><icon name="refresh" label="restart"></icon></a>
    </div>
    <div class="jumbotron">
      <b-table :fields="fields" :items="items">
        <template slot="index" scope="data">
          {{data.index + 1}}
        </template>
        <template slot="app" scope="data">
          {{ data.item.app }}
          <ul>
            <li>script: {{ data.item.script }}</li>
            <li>stdout: {{ data.item.stdout }}</li>
            <li>stderr: {{ data.item.stderr }}</li>
          </ul>
        </template>
        <template slot="online" scope="data">
          <icon :name="(data.item.online) ? 'check' : 'remove'" :class="(data.item.online) ? 'text-success' : 'text-danger'" label="start"></icon>
        </template>
        <template slot="actions" scope="data">
          <app-actions :appId="data.item.app" :server="address" :instances="data.item.instances" @loading="loadingEv" />
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
  import filesize from 'filesize';
  import PulseLoader from 'vue-spinner/src/PulseLoader';

  import appActions from './app-actions';
  import spinner from './spinner';

  import { status } from '../lib/pm2-api';
  import formatUptimeValue from '../lib/format-uptime-value';

  export default {
    name: 'server-item',

    props: [
      'address',
    ],

    components: {
      appActions,
      PulseLoader,
      spinner,
    },

    async mounted() {
      const { system_info: systemInfo, monit, processes } = await status(`http://${this.address}`);

      this.hostname = systemInfo.hostname;
      this.uptime = formatUptimeValue(systemInfo.uptime);
      this.cpus = monit.cpu.length;
      this.mem = {
        total: filesize(monit.total_mem),
        free: filesize(monit.free_mem),
      };
      this.loadavg = monit.loadavg;

      const curTime = Date.now();
      this.items = processes.map(item => ({
        pid: item.pid,
        app: item.name,
        script: item.pm2_env.pm_exec_path,
        stdout: item.pm2_env.pm_out_log_path,
        stderr: item.pm2_env.pm_err_log_path,
        instances: item.pm2_env.instances || 0,
        uptime: formatUptimeValue((curTime - item.pm2_env.pm_uptime) / 1000),
        restarts: item.pm2_env.restart_time,
        online: item.pm2_env.status === 'online',
        cpu: `${item.monit.cpu}%`,
        mem: filesize(item.monit.memory),
      }));
    },

    data() {
      return {
        loadingStatus: false,
        uptime: false,
        cpus: false,
        mem: false,
        loadavg: false,
        processes: false,
        fields: {
          pid: {
            label: 'PID',
          },
          app: {
            label: 'Application',
          },
          instances: {
            label: 'Instances',
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
        items: [],
      };
    },

    methods: {
      triggerAction() {
        window.console.log();
      },
      loadingEv(newStatus) {
        this.loadingStatus = newStatus;
      },
    },
};
</script>
