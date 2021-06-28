<template>
    <ParentLayout>
        <template slot="sidebar-top">
            <doc-previous-versions />
        </template>
        <template slot="page-top">
            <div v-if="$site.themeConfig.docsVersion !== 'Stable' && $site.themeConfig.docsVersion !== 'Latest'" class="custom-block warning" style="margin: 4.6rem; margin-bottom: -4rem;">
                <p>This page is part of archived documentation for openHAB <strong>{{$site.themeConfig.docsVersion}}</strong>. <a href="https://openhab.org/docs/">Go to the current stable version</a></p>
            </div>
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
