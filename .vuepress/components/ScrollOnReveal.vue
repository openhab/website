<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
// doesn't work :(

let sr = null
export default {
    props: ['classes'],
    mounted () {
        const vm = this
        if (sr) {
            sr.reveal(vm.$el, { delay: 250 })
        } else {
            import('scrollreveal').then(ScrollReveal => {
                sr = new ScrollReveal.default()
                if (vm.$el) {
                    sr.reveal(vm.$el, { delay: 250 })
                }
            })
        }
    }
}
</script>
