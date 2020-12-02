import { runInAction, toJS } from "mobx"
import { cardService } from "../services/cardService"
import { catService } from "../services/catService"


export function createCardStore() {
    return {
        cards: [],
        likedCats: [],
        maxDistance: 10,
        catAgeMin: 0,
        catAgeMax: 12,
        userLocation: null,
        setUserLocation(coords) {
            const {latitude, longitude} = coords.coords
            
            this.userLocation = {latitude,longitude}
        },
        async getCats() {
            const amountOfCatsToLoad = 20
            if (this.cards.length === amountOfCatsToLoad) return
            const cats = await cardService.getCats(amountOfCatsToLoad-this.cards.length)
            runInAction(() => {
                cats.forEach(cat => {
                    const catObj = catService.createCatObject(cat.url,cat.id,this.catAgeMin,this.catAgeMax,this.userLocation.latitude,this.userLocation.longitude,this.maxDistance)
                    this.cards.unshift(catObj)
                })
            })
            return
        }, 
        getUserPrefs() {
            const userPrefs = cardService.getUserPrefs()
            this.maxDistance = userPrefs.maxRadius
            this.catAgeMin = userPrefs.catAgeMin
            this.catAgeMax = userPrefs.catAgeMax
        },
        setCatAge(min,max) {
            this.catAgeMin = min
            this.catAgeMax = max
            this.cards = []
            cardService.setCatAge(min,max)
            // this.getCats()
        },
        setMaxRadius(maxRadius) {
            this.maxDistance = maxRadius
            this.cards = []
            cardService.setMaxRadius(maxRadius)
        },
        getLikedCats() {
            const likedCats = cardService.getLikedCats()
            
            this.likedCats = likedCats
        },
        onSwipe(cat,dir) {
            this.cards = this.cards.filter(currCat => currCat.id !== cat.id)
            this.likedCats.unshift(cat)

            if (dir === 'right') {
                cardService.onLike(toJS(this.likedCats))
            } else {
                cardService.onDislike(cat)
            }

            if (this.cards.length < 10) {
                this.getCats()
            }
        },
        onUndo() {
            const cat = cardService.onUndo()
            if (!cat) return null
            this.cards.push(cat)
            return cat
        },
        onDislikeCatById(id) {
            this.likedCats = this.likedCats.filter(currCat => currCat.id !== id)
            cardService.onLike(toJS(this.likedCats))
        }
    }
}