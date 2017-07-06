<template>
  <ul>
    <Task v-for="task in tasks" :key="task.id">{{ task.task }}</Task>
  </ul>
</template>

<script>
  import Task from './Task';

  export default {
    name: 'task',
    components: {
      Task,
    },
    data() {
      return {
        tasks: [
          { task: 'Lorem ipsum', complete: true },
          { task: 'Dolor sit', complete: true },
          { task: 'Sit amet', complete: false },
        ],
      };
    },
  };
</script>
