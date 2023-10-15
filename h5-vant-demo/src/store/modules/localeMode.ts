import { defineStore } from "pinia";

import { store } from "@/store";
import { getLocale, setLocale } from "@/utils/utils";

export const useLocaleModeStore = defineStore({
  id: "locale-mode",
  state: () => ({
    localeMode: getLocale() || "zhCN"
  }),
  actions: {
    localeInfo(locale: any) {
      this.localeMode = locale;
      setLocale(locale);
    }
  }
});

export function useLocaleModeStoreHook() {
  return useLocaleModeStore(store);
}
