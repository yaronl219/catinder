
import { Fab, IconButton } from '@material-ui/core'
import { toJS } from 'mobx'
import { useObserver } from 'mobx-react'
import React, { useEffect } from 'react'
import { Cat } from '../cmps/Cat'
import { useStore } from '../store/storeContext'
import CloseIcon from '@material-ui/icons/Close';

export function LikedCatsPage(props) {
    const store = useStore()
    const { cardStore } = store

    useEffect(() => {
        cardStore.getLikedCats()
    }, [])


    return useObserver(() => (
        <section className="liked-cats-page">
            <h2>Liked Cats</h2>
            <div className="liked-cats-container">
                {(cardStore.likedCats && cardStore.likedCats.length) ?
                    cardStore.likedCats.map(cat => <React.Fragment key={cat.id}>
                        <div className="liked-cat-container">
                            <div className="close-container">
                                {/* <Fab size="small"> */}
                                <IconButton onClick={() => cardStore.onDislikeCatById(cat.id)} size="small">
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                                {/* </Fab> */}
                            </div>
                            <Cat cat={cat} />
                        </div>
                    </React.Fragment>) :
                    <div className="liked-cats-empty-state">
                        <h3>No Cats!</h3>
                        <p>Looks like you haven't liked any cats.</p>
                        <p>Why not like some now?</p>
                    </div>
                }
            </div>
        </section>
    )
    )
}
