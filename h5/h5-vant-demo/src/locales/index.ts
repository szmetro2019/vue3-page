// import { createPinia } from "pinia";
// const pinia = createPinia();
import { createI18n } from "vue-i18n";
import { useLocaleModeStoreHook } from "@/store/modules/localeMode";
import zhCnLocale from "./zhCn";
import enLocale from "./en";
import jaLocale from "./ja";
import ruLocale from "./ru";
import zhHkLocale from "./zhHk";
const messages = {
  zhCn: {
    ...zhCnLocale
  },
  enUS: {
    ...enLocale
  },
  jaJP: {
    ...jaLocale
  },
  ruRU: {
    ...ruLocale
  },
  zhHK: {
    ...zhHkLocale
  }
};
const elementPlusStore1 = useLocaleModeStoreHook().localeMode;

const i18n = createI18n({
  legacy: false,
  locale: elementPlusStore1,
  fallbackLocale: "en",
  messages
});

export default i18n;
