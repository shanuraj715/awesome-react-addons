/*
DEVELOPED BY *SHANU RAJ*

REQUIRED PACKAGES: [react-router-dom]
*/

import React from 'react'
import { Link } from 'react-router-dom'

function Hyperlink(props) {
    const {
        url = '/',
        text,
        type = 'self',
        className = '',
        newTab = false,
        children,
        onClick = () => { },
        style = {},
        rel = 'noreferer noreferer'
    } = props


    return <>
        {type === 'self' &&
            <Link style={style} to={url} className={className} onClick={onClick}>{text ?? children ?? ''}</Link>}
        {type === 'external' &&
        // eslint-disable-next-line
            <a
                style={style} href={url}
                className={className}
                onClick={onClick}
                target={newTab ? "_blank" : "_self"}
                rel={rel}>
                {text ?? children ?? ''}
            </a>}

    </>
}

export default Hyperlink

// Usage of this component
// function MyComponent() {
//     return <>
//         <div>
//             <Hyperlink text="Click Me" url="https://example.com" /*some more props here*/ />
//         </div>
//     </>
// }