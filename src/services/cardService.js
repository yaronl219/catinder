import { storageService } from "./storageService"

export const cardService = {
    getCats,
    onLike,
    onDislike,
    getLikedCats,
    getUserPrefs,
    setMaxRadius,
    setCatAge,
    onUndo
}


async function getCats(amount = 20) {
    const cats = await _httpGet(`https://api.thecatapi.com/v1/images/search?limit=${amount}`)
    return cats
}

function setMaxRadius(maxRadius) {
    const userPrefs = getUserPrefs()
    userPrefs.maxRadius = maxRadius
    storageService.saveToStorage('catUserPrefs', userPrefs)
}

function setCatAge(min, max) {
    const userPrefs = getUserPrefs()
    userPrefs.catAgeMin = min
    userPrefs.catAgeMax = max
    storageService.saveToStorage('catUserPrefs', userPrefs)
}

function getUserPrefs() {
    let userPrefs = storageService.loadFromStorage('catUserPrefs')
    if (!userPrefs) userPrefs = { maxRadius: 10, catAgeMin: 0, catAgeMax: 12 }
    return userPrefs
}

function onLike(likedCats) {
    let cats = storageService.loadFromStorage('cats')
    if (!cats) cats = { likedCats: [], dislikedCats: [] }
    cats.likedCats = likedCats
    storageService.saveToStorage('cats', cats)
}

function onDislike(cat) {
    let cats = storageService.loadFromStorage('cats')
    if (!cats) cats = { likedCats: [], dislikedCats: [] }
    cats.dislikedCats.push(cat)
    storageService.saveToStorage('cats', cats)
}

function onUndo() {
    let cats = storageService.loadFromStorage('cats')
    const cat = cats.dislikedCats.pop()
    storageService.saveToStorage('cats',cats)
    
    return cat
}

function getLikedCats() {
    let cats = storageService.loadFromStorage('cats')
    if (!cats) cats = { likedCats: [], dislikedCats: [] }
    storageService.saveToStorage('cats', cats)
    return cats.likedCats
}
async function _httpGet(url) {

    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}
