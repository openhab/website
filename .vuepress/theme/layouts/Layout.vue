<template>
    <ParentLayout>
        <template slot="sidebar-top">
            <doc-previous-versions />
        </template>
        <template slot="page-bottom">
            <Footer />
        </template>
    </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Footer from '@theme/components/Footer.vue'
import DocPreviousVersions from '../../components/DocPreviousVersions.vue'
export default {
  components: {
      ParentLayout,
      Footer,
      DocPreviousVersions
  }
}
</script>
