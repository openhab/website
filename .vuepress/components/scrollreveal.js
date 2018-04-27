let sr

export default {
    init () {
        if (!sr) {
            return import('scrollreveal').then(ScrollReveal => {
                sr = new ScrollReveal.default()
                return sr
            })
        } else {
            return Promise.resolve(sr)
        }
    }
}
