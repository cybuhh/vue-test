<template>
  <div>
    <icon name="play" label="start"></icon>
    <icon name="stop" label="stop"></icon>
    <icon name="refresh" label="restart"></icon>
    <icon name="plus" label="scale up"></icon>
    <icon name="minus" label="scale down"></icon>
  </div>
</template>

<script>
  export default {
    name: 'app-actions',
    props: [
      'id',
    ],
  };
</script>
