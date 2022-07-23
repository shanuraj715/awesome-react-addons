import React from 'react'
import OneColumn from './OneColumn'
import TwoColumns from './TwoColumns'
import ThreeColumns from './ThreeColumns'
import FourColumns from './FourColumns'
import styles from './footer.module.css'
import globalStyle from '../global.module.css'
import PropTypes from 'prop-types';

function Footer(props) {
    const {
        columns = 4, // Total numbers of columns in the footer
        bottomText = `Copyright ${new Date().getFullYear()} | All Rights Reserved`, // bottom ba text
        bottomBar = true, // is bottombar visible
        className = '', // footer component class name
        bottomClassName = "", // footer bottombar class name
        columnOneJsx = <></>, // column 1 jsx or text
        columnTwoJsx = <></>, // column 2 jsx or text
        columnThreeJsx = <></>, // column 3 jsx or text
        columnFourJsx = <></>, // column 4 jsx or text
    } = props

    return (
        <footer className={`d-flex flex-column ${globalStyle.global} ${styles.footer} ${className}`}>
            <div className={`container py-3`}>
                {columns === 1 && <OneColumn colOne={columnOneJsx} />}
                {columns === 2 && <TwoColumns colOne={columnOneJsx} colTwo={columnTwoJsx} />}
                {columns === 3 && <ThreeColumns colOne={columnOneJsx} colTwo={columnTwoJsx} colThree={columnThreeJsx} />}
                {columns === 4 && <FourColumns colOne={columnOneJsx} colTwo={columnTwoJsx} colThree={columnThreeJsx} colFour={columnFourJsx} />}
            </div>

            {bottomBar &&
                <div className={`bg-light py-4 ${bottomClassName}`}>
                    <div className={`container text-center`}>
                        <p className="text-muted mb-0 py-2">
                            {bottomText}
                        </p>
                    </div>
                </div>
            }
        </footer>
    )
}

Footer.propTypes = {
    columns: PropTypes.number,
    bottomText: PropTypes.any,
    bottomBar: PropTypes.bool,
    className: PropTypes.string,
    bottomClassName: PropTypes.string,
    columnOneJsx: PropTypes.any,
    columnTwoJsx: PropTypes.any,
    columnThreeJsx: PropTypes.any,
    columnFourJsx: PropTypes.any,
}

export default Footer