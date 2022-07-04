const langs = ['en_US', 'th_TH']
const groups = ['common', 'helloWorld']

const localeEntries = langs.map((lang) => {
  const translationEntries = groups.map((group) => {
    try {
      return [group, require(`./${lang}/${group}.json`)]
    } catch(e) {
      return [group, {}]
    }
  });

  return [lang, Object.fromEntries(translationEntries)]
})

export default Object.fromEntries(localeEntries)
