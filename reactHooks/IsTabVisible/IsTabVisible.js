import {useState, useEffect, useCallback} from 'react'

function IsTabVisible() {
  const [isVisible, setIsVisible] = useState(!document.hidden)

  const handleVisibility = useCallback(() => {
    setIsVisible(!document.hidden)
  }, [])

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
        document.removeEventListener('visibilitychange', handleVisibility)
    }
  } ,[handleVisibility])

  return isVisible // returns boolean
}

export default IsTabVisible

// Usage of this hook in react app
/*
function MyComponent() {

    const isVisible = isTabVisible()

    return <>
        {isVisible && <span>Status is Visible</span>}
    </>
}
*/