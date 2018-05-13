<template>
    <Layout>
        <Footer slot="page-bottom" />
    </Layout>
</template>

<script>
import Layout from '@default-theme/Layout.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
      Layout,
      Footer
  }
}
</script>
