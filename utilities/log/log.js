export function log(data) {
    function backgroundStyle(type) {
        switch (type) {
            case 'string':
                return '#cc8e35'
            case 'number':
                return '#2980b9'
            case 'boolean':
                return '#16a085'
            case 'undefined':
                return '#8e44ad'
            case 'object': // for null values
                return '#34495e'
            default:
                return 'transparent'
        }
    }

    const styleForTypes = ['string', 'number', 'boolean', 'undefined']
    const type = typeof data
    if (data === null || styleForTypes.includes(type)) {
        let style = `display: inline-block;
        background-color: ${backgroundStyle(type)};
        color: #ffffff;
        font-weight: bold;
        padding: 3px 7px 3px 7px;
        border-radius: 3px 3px 3px 3px ;`

        console.log(`%c${data}`, style)
    }
    else {
        console.log(data)
    }
}

export function warn(data) {
    
    const styleForTypes = ['string', 'number', 'boolean', 'undefined']
    const type = typeof data
    if (data === null || styleForTypes.includes(type)) {
        let style = `display: inline-block;
        background-color: #ff6348;
        
        color: #ffffff;
        font-weight: bold;
        padding: 3px 7px 3px 7px;
        border-radius: 3px 3px 3px 3px ;`

        console.log(`%c${data}`, style)
    }
    else {
        console.log(data)
    }
}

export function error(data) {
    
    const styleForTypes = ['string', 'number', 'boolean', 'undefined']
    const type = typeof data
    if (data === null || styleForTypes.includes(type)) {
        let style = `display: inline-block;
        background-color: #e0005a;
        color: #ffffff;
        font-weight: bold;
        padding: 3px 7px 3px 7px;
        border-radius: 3px 3px 3px 3px ;`

        console.log(`%c${data}`, style)
    }
    else {
        console.log(data)
    }
}
