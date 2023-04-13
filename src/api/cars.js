const cars = [
    {
        currentPage: 1,
        lastPage: 2,
        totalItems: 10,
        items: [
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
                        'cars/1/5.jpg',
                        'cars/1/6.jpg',
                    ],
                    exterior: [
                        'cars/1/1.jpg',
                        'cars/1/2.jpg',
                        'cars/1/3.jpg',
                        'cars/1/4.jpg',
                    ]
                },
                details: [],
                description: {
                    paragraphs: []
                }
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
                        'cars/2/3.jpg',
                        'cars/2/4.jpg',
                    ],
                    exterior: [
                        'cars/2/1.jpg',
                        'cars/2/2.jpg',
                    ]
                },
                details: [],
                description: {
                    paragraphs: []
                }
            },
            {
                id: 3,
                name: 'Tesla Model X 100D',
                make: 'Tesla',
                model: 'Model X',
                bodyType: 'SUV',
                transmission: 'automatic',
                price: 59999,
                year: '2018',
                kilometres: 77000,
                images: {
                    interior: [
                        'cars/3/2.jpg',
                        'cars/3/3.jpg',
                        'cars/3/4.jpg',
                    ],
                    exterior: [
                        'cars/3/1.jpg',
                    ]
                },
                details: [],
                description: {
                    paragraphs: []
                }
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
                    interior: [
                    ],
                    exterior: [
                        'cars/4/1.jpg',
                        'cars/4/2.jpg',
                        'cars/4/3.jpg',
                    ]
                },
                details: [],
                description: {
                    paragraphs: []
                }
            },
            {
                id: 5,
                name: 'Nissan Leaf',
                make: 'Nissan',
                model: 'Leaf',
                bodyType: 'Hatchback',
                transmission: 'automatic',
                price: 11500,
                year: '2014',
                kilometres: 111000,
                images: {
                    interior: [
                        'cars/5/4.jpg',
                        'cars/5/5.jpg',
                        'cars/5/7.jpg',
                        'cars/5/8.jpg',
                    ],
                    exterior: [
                        'cars/5/1.jpg',
                        'cars/5/2.jpg',
                        'cars/5/3.jpg',
                    ]
                },
                details: [],
                description: {
                    paragraphs: []
                }
            },
            {
                id: 6,
                name: 'Nissan Leaf',
                make: 'Nissan',
                model: 'Leaf',
                bodyType: 'Hatchback',
                transmission: 'automatic',
                price: 11500,
                year: '2014',
                kilometres: 115000,
                images: {
                    interior: [
                        'cars/6/3.jpg',
                        'cars/6/4.jpg',
                        'cars/6/5.jpg',
                        'cars/6/7.jpg',
                    ],
                    exterior: [
                        'cars/6/1.jpg',
                        'cars/6/2.jpg',
                    ]
                },
                details: [],
                description: {
                    paragraphs: []
                }
            },
            {
                id: 7,
                name: 'Nissan Leaf',
                make: 'Nissan',
                model: 'Leaf',
                bodyType: 'Hatchback',
                transmission: 'automatic',
                price: 12500,
                year: '2015',
                kilometres: 69000,
                images: {
                    interior: [
                        'cars/7/4.jpg',
                        'cars/7/5.jpg',
                        'cars/7/6.jpg',
                    ],
                    exterior: [
                        'cars/7/1.jpg',
                        'cars/7/2.jpg',
                        'cars/7/3.jpg',
                    ]
                },
                details: [],
                description: {
                    paragraphs: []
                }
            },
            {
                id: 8,
                name: 'Mazda CX-3',
                make: 'Mazda',
                model: 'CX-3',
                bodyType: 'SUV',
                transmission: 'automatic',
                price: 15800,
                year: 2018,
                kilometres: 113000,
                images: {
                    interior: [
                        'cars/8/4.jpg',
                        'cars/8/5.jpg',
                        'cars/8/6.jpg',
                        'cars/8/7.jpg',
                    ],
                    exterior: [
                        'cars/8/1.jpg',
                        'cars/8/2.jpg',
                        'cars/8/3.jpg',
                    ]
                },
                details: [],
                description: {
                    paragraphs: []
                }
            },
        ]
    },
    {
        currentPage: 1,
        lastPage: 2,
        totalItems: 10,
        items: [
            {
                id: 9,
                name: 'Mazda CX-5',
                make: 'Mazda',
                model: 'CX-5',
                bodyType: 'SUV',
                transmission: 'manual',
                price: 14000,
                year: '2014',
                kilometres: 102000,
                images: {
                    interior: [
                        'cars/9/4.jpg',
                        'cars/9/5.jpg',
                    ],
                    exterior: [
                        'cars/9/1.jpg',
                        'cars/9/2.jpg',
                        'cars/9/3.jpg',
                    ]
                },
                details: [],
                description: {
                    paragraphs: []
                }
            },
            {
                id: 10,
                name: 'Mazda 6',
                make: 'Mazda',
                model: '6',
                bodyType: 'SUV',
                transmission: 'manual',
                price: 9000,
                year: '2015',
                kilometres: 87000,
                images: {
                    interior: [
                        'cars/10/4.jpg',
                        'cars/10/5.jpg',
                    ],
                    exterior: [
                        'cars/10/1.jpg',
                        'cars/10/2.jpg',
                        'cars/10/3.jpg',
                    ]
                },
                details: [],
                description: {
                    paragraphs: []
                }
            },
        ]
    }
]