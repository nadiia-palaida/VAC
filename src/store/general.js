import {defineStore} from "pinia";
import {hideBodyScrollbar, showBodyScrollbar} from "../helpers";

export const useGeneralStore = defineStore('general', {
    state: () => ({
        headerRequestBtnTitle: '',
        isLoading: true
    }),
    actions: {
        showPreloader() {
            hideBodyScrollbar()
            this.isLoading = true
        },
        hidePreloader() {
            console.log('hidepreload')
            if (document.readyState === 'complete') {
                showBodyScrollbar()
                this.isLoading = false
            }
        },
    }
})