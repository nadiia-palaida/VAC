import {defineStore} from "pinia";
import {hideBodyScrollbar, showBodyScrollbar} from "../helpers";

export const useModalStore = defineStore('modal', {
    state: () => ({ component: null, data: null }),
    getters: {
        // doubleCount: (state) => state.count * 2,
    },
    actions: {
        openModal({component, data}) {
            this.component = component
            this.data = data
            hideBodyScrollbar()
        },
        closeModal(){
            this.component = null
            this.data = null
            showBodyScrollbar()
        }
    },
})