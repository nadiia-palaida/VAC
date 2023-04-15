export function getScrollbarWidth() {
    // Creating invisible container
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.overflow = 'scroll' // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps
    document.body.appendChild(outer)

    // Creating inner element and placing it in the container
    const inner = document.createElement('div')
    outer.appendChild(inner)

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth)

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer)

    return scrollbarWidth
}

export function hideBodyScrollbar() {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.paddingRight = `${getScrollbarWidth()}px`
}

export function showBodyScrollbar() {
    document.documentElement.style.overflow = 'auto'
    document.body.style.paddingRight = '0px'
}

export function doPaginationStructure(carsList) {
    const showPerPage  = 8
    const totalItems = carsList.length
    let lastPage = Math.ceil(carsList.length / showPerPage)

    console.log('lastPage', lastPage)

    let newList = []

    for(let i = 0; i < lastPage; i++) {
        newList.push({
            currentPage: i + 1,
            lastPage: lastPage,
            totalItems: totalItems,
            items: [...carsList.slice(i*showPerPage, (i*showPerPage) + showPerPage)]
        })
    }

    console.log('newList', newList)

    return newList
}