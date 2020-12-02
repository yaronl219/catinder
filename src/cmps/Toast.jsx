import { Slide, Snackbar } from '@material-ui/core'
import React from 'react'

export function Toast({ isOpen, behavior }) {

    
    function getMsg() {
        switch (behavior) {
            case 'like':
                return 'Liked!'
            case 'dislike':
                return 'Nope'
            default:
                return 'Undo'
        }
    }

    function getColor() {
        switch (behavior) {
            case 'like':
                return '#63D471'
            case 'dislike':
                return '#fd5068'
            default:
                return 'rgb(64,64,64)'
        }
    }

    function getDirection() {
        switch (behavior) {
            case 'like':
                return 'left'
            case 'dislike':
                return 'right'
            default:
                return 'up'
        }
    }

    return (
        <Slide in={isOpen} direction={getDirection()}>
            <Snackbar open={true}>
                <div className="snackbar-container" style={{ backgroundColor: getColor() }}>
                    <h3>{getMsg()}</h3>
                </div>
            </Snackbar>
        </Slide>
    )
}
