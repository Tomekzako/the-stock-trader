<template>
  <section>
    <div>
      <app-header />
      <nuxt-child />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import appHeader from '~/components/Header.vue'

export default {
  components: {
    appHeader
  }
}
</script>

<style>

  body {
    padding: 30px;
  }

</style>
