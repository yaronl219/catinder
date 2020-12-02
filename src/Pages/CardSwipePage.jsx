
import { observer, useObserver } from 'mobx-react';
import React, { useEffect, useRef, useState } from 'react'
import { Card } from '../cmps/Card';
import { Cat } from '../cmps/Cat';
import { useStore } from '../store/storeContext';
import { toJS } from 'mobx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import { Fab } from '@material-ui/core';
import { Toast } from '../cmps/Toast';

export function CardSwipePage() {

    const store = useStore()

    const { cardStore } = store
    const ref = useRef()

    const [containerReady, setContainerReady] = useState(false)

    const [lastIdChanged, setLastIdChanged] = useState({ id: null, dir: '' })

    const [isSnackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarBehavior, setSnackBarBehavior] = useState('')

    useEffect(() => {
        cardStore.getCats()
        window.addEventListener('keyup', onKeyPress)
        return () => {
            window.removeEventListener('keyup', onKeyPress)
        }
    }, [])


    useEffect(() => {
        if (ref.current) setContainerReady(true)
        return () => {
            setContainerReady(false)
        }
    }, [ref.current])

    function onKeyPress(ev) {
        if (ev.keyCode === 39) {
            onManualLike()
        } else if (ev.keyCode === 37) {
            onManualDislike()
        }
    }

    function onManualLike() {
        const cats = toJS(cardStore.cards)
        const cat = cats[cats.length - 1]
        setLastIdChanged({ id: cat.id, dir: 'right' })
    }

    function onManualDislike() {
        const cats = toJS(cardStore.cards)
        const cat = cats[cats.length - 1]
        setLastIdChanged({ id: cat.id, dir: 'left' })
    }

    function onClickUndo() {
        setLastIdChanged({ id: null, dir: '' })
        const undo = cardStore.onUndo()
        if (!undo) return
        openSnackbar('undo')
    }

    const onSwipe = (catId, dir) => {
        const cats = toJS(cardStore.cards)
        const cat = cats.find(cat => cat.id === catId)
        if (!cat) return
        cardStore.onSwipe(cat, dir)
        if (dir === 'right') {
            openSnackbar('like')
        } else {
            openSnackbar('dislike')
        }
    }

    function openSnackbar(behavior) {
        setSnackBarBehavior(behavior)
        setSnackBarOpen(true)
        setTimeout(() => {
            setSnackBarOpen(false)
        }, 3000);
    }

    return useObserver(() => (
        <section className="card-page-container">
            <div className="upper-container">
                <div ref={ref} className="cards-container">

                    {(cardStore.cards.length && containerReady) ?
                        <div >
                            {cardStore.cards.map((card, idx) => <Card parentRef={ref.current} key={`${card.id}-${idx}`} lastIdChanged={lastIdChanged} id={card.id} onSwipeEnd={onSwipe}><Cat cat={card} /></Card>)}
                        </div>
                        : <React.Fragment />
                    }
                </div>
            </div>
            <div className="bottom-action-bar">
                <div className="dislike-container">
                    <Fab onClick={onManualDislike}>
                        <CloseIcon />
                    </Fab>
                </div>
                <div className="undo-container">

                    <Fab onClick={onClickUndo}>
                        <SettingsBackupRestoreIcon />
                    </Fab>
                </div>
                <div className="like-container">
                    <Fab onClick={onManualLike}>
                        <FavoriteIcon />
                    </Fab>
                </div>
            </div>
            <Toast isOpen={isSnackBarOpen} behavior={snackBarBehavior} />
        </section>
    )
    )
}
