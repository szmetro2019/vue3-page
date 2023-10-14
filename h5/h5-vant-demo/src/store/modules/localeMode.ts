import { defineStore } from "pinia";
import { store } from "@/store";

export const useLocaleModeStore = defineStore({
  id: "locale-mode",
  state: () => ({
    localeMode: ""
  }),
  actions: {
    localeInfo(locale: any) {
      this.localeMode = locale;
    }
  }
});

export function useLocaleModeStoreHook() {
  return useLocaleModeStore(store);
}
