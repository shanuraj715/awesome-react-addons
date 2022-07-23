import React from 'react'

function OneColumn(props) {
    const { colOne } = props

    return (
        <div className="row">
            <div className={`col-12 mb-4 mb-lg-0`}>
                {colOne}
            </div>
        </div>
    )
}

export default OneColumn