import Vue from 'vue'
import VueI18n from 'vue-i18n'
import localeEntries from '@/i18n'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'th_TH',
    fallbackLocale: 'en_US',
    messages: localeEntries,
})
