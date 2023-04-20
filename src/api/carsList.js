import {doPaginationStructure} from "../helpers";

const SORT_BY_NEWEST = 'newest inventory'
const SORT_BY_LOWEST = 'lowest price'
const SORT_BY_HIGHEST = 'highest prices'
const SORT_BY_RECOMMENDATIONS = 'recommendations'

export const carItems = [
    {
        id: 1,
        name: 'Tesla Model 3 Performance',
        make: 'Tesla',
        model: 'Model 3',
        bodyType: 'sedan',
        transmission: 'automatic',
        price: 41000,
        year: '2018',
        kilometres: 46000,
        images: {
            interior: [
                'cars/1/interior/5.jpeg',
                'cars/1/interior/6.jpeg',
            ],
            exterior: [
                'cars/1/exterior/1.jpeg',
                'cars/1/exterior/2.jpeg',
                'cars/1/exterior/3.jpeg',
                'cars/1/exterior/4.jpeg',
            ]
        },
        details: [
            'Rear wheel drive',
            '6 cylinders',
            '11 l. per 100 km.',
            'Rear wheel drive',
            '2500-4000 rpm',
            '0-100 in 2.7 s.',
            'Power steering',
            '2500-4000 rpm'
        ],
        description: {
            paragraphs: [
                'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.',
                'The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'
            ]
        },
        date: '04.01.2023'
    },
    {
        id: 2,
        name: 'Tesla Model S 75D',
        make: 'Tesla',
        model: 'Model S',
        bodyType: 'sedan',
        transmission: 'automatic',
        price: 39000,
        year: '2017',
        kilometres: 73000,
        images: {
            interior: [
                'cars/2/interior/3.jpeg',
                'cars/2/interior/4.jpeg',
            ],
            exterior: [
                'cars/2/exterior/1.jpeg',
                'cars/2/exterior/2.jpeg',
            ]
        },
        details: [
            'Rear wheel drive',
            '6 cylinders',
            '11 l. per 100 km.',
            '0-100 in 2.7 s.',
            '2500-4000 rpm'
        ],
        description: {
             paragraphs: [
                'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.',
                'The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'
            ]
        },
        date: '04.15.2023'
    },
    {
        id: 3,
        name: 'Tesla Model X 100D',
        make: 'Tesla',
        model: 'Model X',
        bodyType: 'suv',
        transmission: 'automatic',
        price: 59999,
        year: '2018',
        kilometres: 77000,
        images: {
            interior: [
                'cars/3/interior/2.jpeg',
                'cars/3/interior/3.jpeg',
                'cars/3/interior/4.jpeg',
            ],
            exterior: [
                'cars/3/exterior/1.jpeg',
            ]
        },
        details: [
            '11 l. per 100 km.',
            'Rear wheel drive',
            '2500-4000 rpm',
            '0-100 in 2.7 s.',
            'Power steering',
        ],
        description: {
             paragraphs: [
                'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.',
            ]
        },
        date: '04.13.2023'
    },
    {
        id: 4,
        name: 'Tesla Model 3 Performance',
        make: 'Tesla',
        model: 'Model 3',
        bodyType: 'sedan',
        transmission: 'automatic',
        price: 59000,
        year: 2021,
        kilometres: 12000,
        images: {
            interior: [],
            exterior: [
                'cars/4/exterior/1.jpeg',
                'cars/4/exterior/2.jpeg',
                'cars/4/exterior/3.jpeg',
            ]
        },
        details: [
            '11 l. per 100 km.',
            'Rear wheel drive',
        ],
        description: {
             paragraphs: [
                'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.',
                'The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'
            ]
        },
        date: '04.19.2023'
    },
    {
        id: 5,
        name: 'Nissan Leaf',
        make: 'Nissan',
        model: 'Leaf',
        bodyType: 'hatchback',
        transmission: 'automatic',
        price: 11500,
        year: '2014',
        kilometres: 111000,
        images: {
            interior: [
                'cars/5/interior/4.jpeg',
                'cars/5/interior/5.jpeg',
                'cars/5/interior/7.jpeg',
                'cars/5/interior/8.jpeg',
            ],
            exterior: [
                'cars/5/exterior/1.jpeg',
                'cars/5/exterior/2.jpeg',
                'cars/5/exterior/3.jpeg',
            ]
        },
        details: [],
        description: {
             paragraphs: [
                'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.',
                'The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'
            ]
        },
        date: '04.11.2023'
    },
    {
        id: 6,
        name: 'Nissan Leaf',
        make: 'Nissan',
        model: 'Leaf',
        bodyType: 'hatchback',
        transmission: 'automatic',
        price: 11500,
        year: '2014',
        kilometres: 115000,
        images: {
            interior: [
                'cars/6/interior/3.jpeg',
                'cars/6/interior/4.jpeg',
                'cars/6/interior/5.jpeg',
                'cars/6/interior/7.jpeg',
            ],
            exterior: [
                'cars/6/exterior/1.jpeg',
                'cars/6/exterior/2.jpeg',
            ]
        },
        details: [
            'Rear wheel drive',
            '6 cylinders',
            '11 l. per 100 km.',
            'Rear wheel drive',
            '2500-4000 rpm',
            '0-100 in 2.7 s.',
            'Power steering',
            '2500-4000 rpm'
        ],
        description: {
             paragraphs: [
                'The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'
            ]
        },
        date: '04.03.2023'
    },
    {
        id: 7,
        name: 'Nissan Leaf',
        make: 'Nissan',
        model: 'Leaf',
        bodyType: 'hatchback',
        transmission: 'automatic',
        price: 12500,
        year: '2015',
        kilometres: 69000,
        images: {
            interior: [
                'cars/7/interior/1.jpeg',
                'cars/7/interior/2.jpeg',
                'cars/7/interior/3.jpeg',
            ],
            exterior: [
                'cars/7/exterior/4.jpeg',
                'cars/7/exterior/5.jpeg',
                'cars/7/exterior/6.jpeg',
            ]
        },
        details: [
            'Rear wheel drive',
            '6 cylinders',
            '11 l. per 100 km.',
            '2500-4000 rpm'
        ],
        description: {
             paragraphs: [
                'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.',
                'The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'
            ]
        },
        date: '04.17.2023'
    },
    {
        id: 8,
        name: 'Mazda CX-3',
        make: 'Mazda',
        model: 'CX-3',
        bodyType: 'suv',
        transmission: 'automatic',
        price: 15800,
        year: 2018,
        kilometres: 113000,
        images: {
            interior: [
                'cars/8/interior/4.jpeg',
                'cars/8/interior/5.jpeg',
                'cars/8/interior/6.jpeg',
                'cars/8/interior/7.jpeg',
            ],
            exterior: [
                'cars/8/exterior/1.jpeg',
                'cars/8/exterior/2.jpeg',
                'cars/8/exterior/3.jpeg',
            ]
        },
        details: [],
        description: {
             paragraphs: [
                'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.',
                'The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'
            ]
        },
        date: '04.11.2023'
    },
    {
        id: 9,
        name: 'Mazda CX-5',
        make: 'Mazda',
        model: 'CX-5',
        bodyType: 'suv',
        transmission: 'manual',
        price: 14000,
        year: '2014',
        kilometres: 102000,
        images: {
            interior: [
                'cars/9/interior/4.jpeg',
                'cars/9/interior/5.jpeg',
            ],
            exterior: [
                'cars/9/exterior/1.jpeg',
                'cars/9/exterior/2.jpeg',
                'cars/9/exterior/3.jpeg',
            ]
        },
        details: [],
        description: {
             paragraphs: [
            ]
        },
        date: '04.19.2023'
    },
    {
        id: 10,
        name: 'Mazda 6',
        make: 'Mazda',
        model: '6',
        bodyType: 'suv',
        transmission: 'manual',
        price: 9000,
        year: '2015',
        kilometres: 87000,
        images: {
            interior: [
                'cars/10/interior/4.jpeg',
                'cars/10/interior/5.jpeg',
            ],
            exterior: [
                'cars/10/exterior/1.jpeg',
                'cars/10/exterior/2.jpeg',
                'cars/10/exterior/3.jpeg',
            ]
        },
        details: [
            'Rear wheel drive',
            '2500-4000 rpm',
            '0-100 in 2.7 s.',
            'Power steering',
            '2500-4000 rpm'
        ],
        description: {
             paragraphs: [
                'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.',
                'The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'
            ]
        },
        date: '04.01.2023'
    }
]

export const bodyTypes = [
    {
        label: 'Trucks',
        value: 'trucks',
        icon: 'filter-truck'
    },
    {
        label: 'SUV',
        value: 'suv',
        icon: 'filter-suv'
    },
    {
        label: 'Sedan',
        value: 'sedan',
        icon: 'filter-sedan'
    },
    {
        label: 'Hatchback',
        value: 'hatchback',
        icon: 'filter-hatchback'
    },
    {
        label: 'Coupe',
        value: 'coupe',
        icon: 'filter-coupe'
    },
    {
        label: 'Convertiable',
        value: 'convertiable',
        icon: 'filter-convertiable'
    },
    {
        label: 'VAN',
        value: 'van',
        icon: 'filter-van'
    },
]

export const transmissionTypes = [
    {
        label: 'Automatic',
        value: 'automatic',
    },
    {
        label: 'Manual',
        value: 'manual',
    },
]

export const sortItems = [
    {
        label: 'Recommendations',
        value: 'recommendations',
    },
    {
        label: 'Newest inventory',
        value: 'newest inventory',
    },
    {
        label: 'Lowest price',
        value: 'lowest price',
    },
    {
        label: 'Highest prices',
        value: 'highest prices',
    },
]

export function getAutocompleteDataMake() {
    return [...new Set(carItems.map(item => item.make))]
}

export function getAutocompleteDataModel() {
    return [...new Set(carItems.map(item => item.model))]
}

export function getAutocompleteDataModelByMakes(makes) {
    return [...new Set(carItems.filter(itemFilter => makes.includes(itemFilter.make)).map(item => item.model))]
}

export function getRangeStartValue(name) {
    const allItems = carItems.map(item => item[name])

    return [Math.min(...allItems), Math.max(...allItems)]
}

export function getKilometresStartValue() {
    const allItems = carItems.map(item => item.kilometres)

    return Math.max(...allItems)
}

export function doFilter(filters) {
    const searchList = doSearchFilter(filters)

    const newCarItems = searchList.filter(item => {
        return (filters.make.value.length ? filters.make.value.includes(item.make) : true) &&
            (filters.model.value.length ? filters.model.value.includes(item.model) : true) &&
            (filters.bodyType.value.length ? filters.bodyType.value.includes(item.bodyType) : true) &&
            (filters.transmission.value.length ? filters.transmission.value.includes(item.transmission) : true) &&
            item.price >= filters.price.value[0] && item.price <= filters.price.value[1] &&
            item.year >= filters.year.value[0] && item.year <= filters.year.value[1] &&
            item.kilometres <= filters.kilometres.value
    })

    if (filters.sort.value === SORT_BY_RECOMMENDATIONS) {
    }

    if (filters.sort.value === SORT_BY_LOWEST) {
        newCarItems.sort(function (a, b) {
            return a.price - b.price
        })
    }

    if (filters.sort.value === SORT_BY_HIGHEST) {
        newCarItems.sort(function (a, b) {
            return b.price - a.price
        })
    }

    if (filters.sort.value === SORT_BY_NEWEST) {
        newCarItems.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        })
    }

    return doPaginationStructure(newCarItems)
}

export function doSearchFilter(filters) {
    const newCarItems = carItems.filter(item => {
        return item.make.toLowerCase().match(filters.name.value.toLowerCase())
    })

    return newCarItems
}
