import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { utilService } from '../services/utilService'
import { useStore } from '../store/storeContext'

export function Cat({ cat }) {

    const store = useStore()
    const { cardStore } = store
    const { userLocation } = cardStore

    const [imgReady, setImgReady] = useState(false)

    useEffect(() => {
        const catImg = new Image();
        catImg.src = cat.img
        catImg.onload = () => {
            setImgReady(true)
        }
        return(() => {})
    }, [cat.img])



    return (
        <React.Fragment>{
            (!imgReady) ? (
                <div className="cat-container">
                    <CircularProgress />
                </div>
            ) : (
                    <div className="cat-container" style={{ backgroundImage: `url('${cat.img}')` }}>
                        <div className="mask">
                            <div className="placeholder" />
                            <div className="cat-details">
                                <div className="cat-header">
                                    <span><h3 className="cat-name">{cat.name}</h3></span>
                                    <span className="cat-age">{cat.age}</span>
                                </div>
                                <div className="cat-distance">
                                    {(userLocation) ? 
                                        <span >{Math.round(utilService.getDistanceFromLatLonInKm(userLocation.latitude, userLocation.longitude, cat.coords.lat, cat.coords.lng))} km away</span>
                                        : <React.Fragment />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>)
        }
        </React.Fragment>
    )
}
