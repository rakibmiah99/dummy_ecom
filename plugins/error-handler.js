export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        console.log('error',error)
        console.log('instance',instance)
        console.log('info',info)
    }
});