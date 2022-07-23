import React from 'react'

function FourColumns(props) {

    const { colOne, colTwo, colThree, colFour } = props

    return (
        <div className="row">
            <div className={`col-lg-3 col-md-6 mb-4 mb-lg-0`}>
                {colOne}
            </div>
            <div className={`col-lg-3 col-md-6 mb-4 mb-lg-0`}>
                {colTwo}
            </div>
            <div className={`col-lg-3 col-md-6 mb-4 mb-lg-0`}>
                {colThree}
            </div>
            <div className={`col-lg-3 col-md-6 mb-lg-0`}>
                {colFour}
            </div>
        </div>
    )
}

export default FourColumns