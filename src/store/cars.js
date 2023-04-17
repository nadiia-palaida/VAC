import {defineStore} from "pinia";
import {cars} from '../api/cars';
import {doPaginationStructure} from "../helpers";

const TYPE_SEARCH_MAKE = 'search'
const TYPE_FILTER_MAKE = 'filter'

export const useCarsStore = defineStore('cars', {
    state: () => ({
        inputSearchValue: '',

        filters: {
            search: '',
            make: [],
            model: [],
        },

        filterRules: null,
    }),
    getters: {
        allCars: () => {
            const allCars = []
            cars.forEach(item => {
                allCars.push(...item.items)
            })
            return allCars
        },
        carModels: (state) => {
            let carModels = []
            state.allCars.filter(item => {
                if (item.make === state.filters.make) {
                    carModels.push(item.model)
                }
            })
            return carModels
        },
        activePageCars: (state) => {
            return (activePage) => {
                if (!state.filters.search) {
                    return cars.find(item => item.currentPage === activePage)
                } else {
                    return state.doFilter('name', state.filters.search).find(item => item.currentPage === activePage)
                }
            }
        },
    },
    actions: {
        doFilter(field, value) {
            let filterArr = this.allCars.filter(item => {
                    return item[field].toString().toLowerCase().match(value.toLowerCase())
                }
            )
            return doPaginationStructure(filterArr)
        },
        carsMakes(type) {
            let carsMakes = []
            this.allCars.forEach(item => {
                carsMakes.push(item.make)
            })
            carsMakes = [...new Set(carsMakes)]

            if (type === TYPE_SEARCH_MAKE) {
                return carsMakes.filter(item => item.toLowerCase().match(this.inputSearchValue.toLowerCase()))
            } else {
                return carsMakes.filter(item => {
                    if (this.filters.make.length) {
                        return item.toLowerCase().match(this.filters.make[this.filters.make.lastIndex - 1].toLowerCase())
                    } else {
                        return carsMakes.filter(item => item.toLowerCase().match(this.inputSearchValue.toLowerCase()))
                    }
                })
            }
        },
        addFilter({name, value}) {
            if (!this.filters[name].includes(value.toLowerCase())) {
                if (value) {
                    this.filters[name].push(value.toLowerCase())
                }
            }
        },
        allRulesChosenValues(rules) {
            let newArr = []
            rules.forEach(item => {
                if (this.filters[item.name].length) {
                    newArr.push({
                        name: item.name,
                        list: [...this.filters[item.name]]
                    })
                }
            })
            return newArr
        },
        deleteFilter(name, value) {
            this.filters[name] = this.filters[name].filter(item => item !== value)
        }
    },
})