const quizTree = [
    {
        id: 'budget',
        name: 'budget',
        title: 'What\'s your budget?',
        subtitle: 'Find vehicle options that fit your budget.',
        values: [
            {label: 'Under $250/Month', value: 'Under $250/Month'},
            {label: '$250-374/Month', value: '$250-374/Month'},
            {label: '$374-500/Month', value: '$374-500/Month'},
            {label: 'Over $500/Month', value: 'Over $500/Month'},
        ],
        next: 'employment_status',
        type: 'radio'
    },
    {
        id: 'employment_status',
        name: 'employment_status',
        title: 'What\'s your employment status?',
        subtitle: 'Your employment status will help determine the best vehicle and financing options for you.',
        values: [
            {label: 'Employed', value: 'Employed', next: 'monthly_income_1'},
            {label: 'Self-Employed', value: 'Self-Employed', next: 'monthly_income_1'},
            {label: 'Student', value: 'Student', next: 'is_working'},
            {label: 'Retired / Pension', value: 'Retired / Pension', next: 'monthly_income_2'},
            {label: 'Other', value: 'Other'},
        ],
        next: '',
        type: 'radio'
    },
    {
        id: 'monthly_income_1',
        name: 'monthly_income',
        title: 'Enter your monthly income',
        subtitle: 'Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.',
        values: [
            {name: 'monthly_income', placeholder: 'Monthly income', type: 'number'},
        ],
        next: 'employment',
        type: 'input'
    },
    {
        id: 'monthly_income_2',
        name: 'monthly_income',
        title: 'Enter your monthly income',
        subtitle: 'Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.',
        values: [
            {name: 'monthly_income', placeholder: 'Monthly income', type: 'number'},
        ],
        next: 'is_working_2',
        type: 'input'
    },
    {
        id: 'monthly_income_3',
        name: 'monthly_income',
        title: 'Enter your monthly income',
        subtitle: 'Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.',
        values: [
            {name: 'monthly_income', placeholder: 'Monthly income', type: 'number'},
        ],
        next: 'how_long_receiving',
        type: 'input'
    },
    {
        id: 'is_working',
        name: 'is_working',
        title: 'Are you currently working?',
        subtitle: 'Your employment status will help determing the best vehicle and financing options for you.',
        values: [
            {label: 'Yes', value: 'Yes', next: 'employment'},
            {label: 'No', value: 'No', next: 'how_long_have_been'},
        ],
        next: '',
        type: 'radio'
    },
    {
        id: 'is_working_2',
        name: 'is_working',
        title: 'Are you currently working?',
        subtitle: 'Your employment status will help determing the best vehicle and financing options for you.',
        values: [
            {label: 'Yes', value: 'Yes', next: 'employment'},
            {label: 'No', value: 'No', next: 'how_long_receiving'},
        ],
        next: '',
        type: 'radio'
    },
    {
        id: 'how_earn',
        name: 'how_earn',
        title: 'How do you earn income?',
        subtitle: 'Your employment status will help determine the best vehicle and financing options for you.',
        values: [
            {label: 'Long-term disability', value: 'Long-term disability'},
            {label: 'Child support', value: 'Child support'},
            {label: 'Maternity leave', value: 'Maternity leave'},
            {label: 'Unemployed / EI', value: 'Unemployed / EI'},
            {label: 'Spousal support / Alimony', value: 'Spousal support / Alimony'},
            {label: 'Social assistance / Welfare', value: 'Social assistance / Welfare'},
            {label: 'Baby bonus / Child tax', value: 'Baby bonus / Child tax'},
            {label: 'Other / Not listed', value: 'Other / Not listed'},
        ],
        next: 'monthly_income_3',
        type: 'radio'
    },
    {
        id: 'employment',
        name: 'employment',
        title: 'Tell us about your employment',
        subtitle: 'We won’t come visit but we need these details to confirm your employment status so you can get the best rates possible.',
        values: [
            {name: 'employer', placeholder: 'Employer', type: 'text'},
            {name: 'title', placeholder: 'Title', type: 'text'},
        ],
        next: 'how_long_have_been',
        type: 'input'
    },
    {
        id: 'how_long_have_been',
        name: 'how_long_have_been',
        title: 'How long have you been earning this income?',
        subtitle: 'Your income details help us make sure your vehicle payments are easy and affordable.',
        values: [
            {name: 'long-years', placeholder: 'Years', type: 'number'},
            {name: 'long-months', placeholder: 'Months', type: 'number'},
        ],
        next: 'how_long_receiving',
        type: 'input'
    },
    {
        id: 'how_long_receiving',
        name: 'how_long_receiving',
        title: 'How long receiving?',
        subtitle: 'Your income details help us make sure your vehicle payments are easy and affordable.',
        values: [
            {name: 'long-time', placeholder: 'Time', type: 'number'},
        ],
        next: 'address',
        type: 'input'
    },
    {
        id: 'address',
        name: 'address',
        title: 'Where do you live?',
        subtitle: 'Providing your location helps find the best deals near you.',
        values: [
            {name: 'street-address', placeholder: 'Street address', type: 'text'},
            {name: 'city-address', placeholder: 'City', type: 'text'},
            {name: 'province-address', placeholder: 'Province', type: 'text'},
            {name: 'postal-code-address', placeholder: 'Postal code', type: 'number'},
        ],
        next: 'born_date',
        type: 'input'
    },
    {
        id: 'born_date',
        name: 'born_date',
        title: 'When were you born?',
        subtitle: '',
        values: [
            {name: 'born-year', placeholder: 'Year', type: 'number'},
            {name: 'born-month', placeholder: 'Month', type: 'number'},
            {name: 'born-day', placeholder: 'Day', type: 'number'},
        ],
        next: '',
        type: 'input'
    },
    {
        id: 'user_info',
        name: 'user_info',
        title: 'Congratulations! Last step.',
        subtitle: 'Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. ',
        values: [
            {name: 'first-name', placeholder: 'First name', type: 'text'},
            {name: 'last-name', placeholder: 'Last name', type: 'text'},
            {name: 'email', placeholder: 'Email', type: 'email'},
            {name: 'phone', placeholder: 'Phone number', type: 'phone'},
        ],
        next: '',
        type: 'input'
    },
]