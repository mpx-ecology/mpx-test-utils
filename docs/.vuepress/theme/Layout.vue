<template>
  <ParentLayout>
    <template #page-top>
      <div class="warning-wrapper">
      </div>
    </template>
    <Content />
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',

  components: {
    ParentLayout
  }
}
</script>

<style lang="css">
.warning-wrapper {
  max-width: 740px;
  margin: 5rem auto 0;
}

.custom-block.vue3-warning {
  padding: 1rem;
  font-size: 0.9rem;
}

.custom-block.vue3-warning p {
  margin: 0;
}

/* Overrides theme's default margin-top values */
.theme-default-content:not(.custom) > h1:first-child {
  margin-top: -4.5rem;
}
</style>
