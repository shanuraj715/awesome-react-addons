import { useState, useEffect, useCallback } from "react";
import styles from "./gototop.module.css";
import { ArrowUpCircleFill, ChevronUp, CaretUpFill } from 'react-bootstrap-icons'

function GoToTop(props) {

    const dynamicIcons = (variant) => {
        switch (variant) {
            case 'circular1':
                return props.Icon ?? ArrowUpCircleFill
            case 'square1':
                return props.Icon ?? ChevronUp
            case 'square2':
                return props.Icon ?? CaretUpFill
            default:
                return ArrowUpCircleFill
        }
    }

    const {
        Icon = dynamicIcons(props.variant ?? 'circular1'),
        visibleAfter = 500,
        variant = 'square1',
        style = {},
        className = '',
        position = 'right'
    } = props

    const btnByVariant = () => {
        switch (variant) {
            case "circular1":
                return {
                    style: styles.circular1,
                    icon: <Icon />
                }
            case "square1":
                return {
                    style: styles.square1,
                    icon: <Icon />
                }
            case "square2":
                return {
                    style: styles.square2,
                    icon: <Icon />
                }
            default:
                return {
                    style: styles.circular1,
                    icon: <Icon />
                }
        }
    }

    const [btnVisibility, setButtonVisibility] = useState(false);
    const [btnData] = useState(btnByVariant())


    const scrollHandler = useCallback(() => {
        let scrolled = window.pageYOffset;
        scrolled > visibleAfter ? setButtonVisibility(true) : setButtonVisibility(false);
    }, [visibleAfter]);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
    }, [scrollHandler]);

    return (
        <span
            className={`d-flex align-items-center justify-content-center 
            ${btnData.style} ${btnVisibility ? styles.visible : styles.hidden}
            ${position === 'right' ? styles.right : styles.left} 
            ${className}`}
            style={style}
            onClick={() => window.scrollTo(0, 0)}
        >
            {btnData.icon}
            {console.log(btnData)}
        </span>
    );
}

export default GoToTop;

// VARIANTS
/*
circular1
square1
square2
*/