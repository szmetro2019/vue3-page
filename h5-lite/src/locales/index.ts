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
  zhCN: {
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
const localeMode = useLocaleModeStoreHook().localeMode;

const i18n = createI18n({
  legacy: false,
  locale: localeMode,
  fallbackLocale: "en",
  messages
});

export default i18n;
