import React from 'react'

function TwoColumns(props) {
    const { colOne, colTwo } = props

    return (
        <div className="row">
            <div className={`col-lg-6 col-md-6 mb-4 mb-lg-0`}>
                {colOne}
            </div>
            <div className={`col-lg-6 col-md-6 mb-4 mb-lg-0`}>
                {colTwo}
            </div>
        </div>
    )
}

export default TwoColumns