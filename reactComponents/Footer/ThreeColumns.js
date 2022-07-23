import React from 'react'

function ThreeColumns(props) {

    const { colOne, colTwo, colThree } = props

    return (
        <div className="row">
            <div className={`col-lg-5 col-md-8 mb-4 mb-lg-0`}>
                {colOne}
            </div>
            <div className={`col-lg-3 col-md-4 mb-4 mb-lg-0`}>
                {colTwo}
            </div>
            <div className={`col-lg-3 col-md-12 mb-4 mb-lg-0`}>
                {colThree}
            </div>
        </div>
    )
}

export default ThreeColumns