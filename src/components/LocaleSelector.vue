<template>
  <div class="wrapper">
    <label>{{ $t('common.locale_selector_label') }}</label>
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`lang-${i}`">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LocaleSelector',
  data() {
    return {
      langs: ['th_TH', 'en_US'],
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
label {
  margin-right: 8px;
}
</style>
