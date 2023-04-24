import {defineStore} from "pinia";
import {hideBodyScrollbar, showBodyScrollbar} from "../helpers";

export const useGeneralStore = defineStore('general', {
    state: () => ({
        headerRequestBtnTitle: '',
        isLoading: false
    }),
    actions: {
        showPreloader() {
            hideBodyScrollbar()
            this.isLoading = true
        },
        hidePreloader() {
            if (document.readyState === 'complete') {
                showBodyScrollbar()
                this.isLoading = false
            }
        },
    }
})