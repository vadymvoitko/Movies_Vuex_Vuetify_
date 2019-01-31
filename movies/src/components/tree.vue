<template>
  <ul>
    <li>
      {{ data.key }}
      <template v-if="typeof data.value == 'object'">
        <tree
          v-for="(value, key, index) in data.value"
          :key="index"
          :data="{key, value}"
        />
      </template>  
      <ul v-else>
        <li>
          {{ data.value }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tree',
  props: ['data']
}
</script>