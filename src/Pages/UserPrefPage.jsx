import { Slider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useStore } from '../store/storeContext'
import youngCatImg from '../assets/imgs/baby-cat.jpg'
import medCatImg from '../assets/imgs/med-cat.jpg'
import grownCatImg from '../assets/imgs/grown-cat.jpg'
import oldCatImg from '../assets/imgs/old-cat.jpg'

export function UserPrefPage() {

    const store = useStore()
    const { cardStore } = store

    const [catAge, setCatAge] = useState([0, 12])
    const [radius, setRadius] = useState(10)

    useEffect(() => {
        const { catAgeMin, catAgeMax, maxDistance } = cardStore
        setCatAge([catAgeMin, catAgeMax])
        setRadius(maxDistance)
    }, [cardStore])

    function onChangeCatAge(ev, catAge) {
        setCatAge(catAge)
        cardStore.setCatAge(catAge[0], catAge[1])
    }

    function onChangeRadius(ev, maxRadius) {
        setRadius(maxRadius)
        cardStore.setMaxRadius(maxRadius)
    }

    function getCatImage() {
        const avgCatAge = (catAge[0] + catAge[1]) / 2
        if (avgCatAge < 2) return youngCatImg
        if (avgCatAge < 9) return medCatImg
        if (avgCatAge < 15) return grownCatImg
        return oldCatImg
    }

    return (
        <section className="user-pref-page">
            <div className="slider-container">
                <div className="header">
                    <h3>Filter the cats you want to meet</h3>
                </div>
                <div className="cat-age-container">
                    <div className="header">
                        <span>Age Range</span>
                        <span>{catAge[0]} - {catAge[1]}</span>
                    </div>

                    <Slider
                        value={catAge}
                        color="secondary"
                        onChange={onChangeCatAge}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        min={0}
                        max={20}
                    />
                </div>
                <div className="max-radius-container">
                    <div className="header">
                        <span>Maximum Distance</span>
                        <span>{radius} km</span>
                    </div>
                    <Slider
                        value={radius}
                        color="secondary"
                        onChange={onChangeRadius}
                        valueLabelDisplay="auto"
                        min={0}
                        max={100}
                    />
                </div>
            </div>
            <div className="cat-img-container">
                <img src={getCatImage()} alt="cat" />
            </div>
        </section>
    )
}
