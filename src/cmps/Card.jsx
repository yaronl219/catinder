
import { SelectAll } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'

export function Card({ children,
    parentRef,
    id,
    lastIdChanged,
    swipeSuccessMarginPercentage = 100,
    onSwipeRight = () => { },
    onSwipeLeft = () => { },
    onSwipeEnd = () => { },
}) {

    const cardRef = useRef()
    
    let shouldMove = false

    let lastX = null
    let lastY = null

    const parentLimit = parentRef.offsetWidth / (1 + (swipeSuccessMarginPercentage / 100))

    const isInRightLimit = useRef()
    const isInLeftLimit = useRef()

    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)

    const [elClass, setElClass] = useState('')

    const rotation = useRef(0)

    function onMove(x, y) {
        if (!lastX || !lastY) {
            lastX = x
            lastY = y
            return
        }


        setOffsetX(offsetX + (x - lastX))
        setOffsetY(offsetY + (y - lastY))
    }

    useEffect(() => {
        if (offsetX > 0) {
            onSwipeRight(offsetX)
        }
        if (offsetX < 0) {
            onSwipeLeft(offsetX)
        }
    }, [offsetX, onSwipeLeft, onSwipeRight])

    useEffect(() => {
        if (lastIdChanged.id === id) {
            onSwipeComplete(lastIdChanged.dir)
        }
    }, [lastIdChanged.id, id, onSwipeComplete])

    function checkSwipeEndLocation() {
        if (isInRightLimit.current) {
            onSwipeComplete('right')
            return 'right'
        }
        if (isInLeftLimit.current) {
            onSwipeComplete('left')
            return 'left'
        }

        return null
    }

    function onSwipeComplete(dir) {
        setElClass(`card-swiped-${dir}`)
        setTimeout(() => {
            // delay outputing the result in order for the animation to work
            onSwipeEnd(id, dir)
        }, 500)
    }

    function onMoveEnd(ev) {
        shouldMove = false
        if (checkSwipeEndLocation()) return
        setElClass('reseting')

        setOffsetX(0)
        setOffsetY(0)
        // setRotation(0)
        rotation.current = 0
        lastX = 0
        lastY = 0
        setTimeout(() => {
            setElClass('')
        }, 500);
    }


    function onMouseMove(ev) {
        if (shouldMove) {
            onMove(ev.clientX, ev.clientY)
        }

    }

    function onMouseDown(ev) {
        shouldMove = true
    }

    // function onMouseUp(ev) {
    //     onMoveEnd()
    // }

    // function onTouchEnd(ev) {
    //     onMoveEnd()
    // }


    function onTouchMove(ev) {
        
        ev.preventDefault()
        onMove(ev.touches[0].clientX, ev.touches[0].clientY)
    }



    useEffect(() => {
        if (cardRef.current) {
            cardRef.current.addEventListener('mousedown', onMouseDown)
            cardRef.current.addEventListener('mouseup', onMoveEnd)
            cardRef.current.addEventListener('mousemove', onMouseMove)
            cardRef.current.addEventListener('touchmove', onTouchMove)
            cardRef.current.addEventListener('touchend', onMoveEnd)
        }
    }, [])

    useEffect(() => {
        // if (offsetX > 0) {
        // handling right side
        if (offsetX > parentLimit) {
            isInRightLimit.current = true
        } else {
            isInRightLimit.current = false
        }

        if (offsetX < parentLimit * -1) {
            isInLeftLimit.current = true
        } else {
            isInLeftLimit.current = false
        }


        rotation.current = (offsetX / parentLimit / 10)

    }, [offsetX, parentLimit, isInRightLimit])

    return (
        <div ref={cardRef} style={{ transform: `matrix(1.00,${rotation.current},${-rotation.current},1.00,${offsetX},${offsetY})` }} className={`card-container ${elClass}`}>
            {children}
        </div>
    )
}
