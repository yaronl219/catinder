import { utilService } from "./utilService"

export const catService = {
    createCatObject
}

const catNames = [
	"Abby",
	"Angel",
	"Annie",
	"Baby",
	"Bailey",
	"Bandit",
	"Bear",
	"Bella",
	"Bob",
	"Boo",
	"Boots",
	"Bubba",
	"Buddy",
	"Buster",
	"Cali",
	"Callie",
	"Casper",
	"Charlie",
	"Chester",
	"Chloe",
	"Cleo",
	"Coco",
	"Cookie",
	"Cuddles",
	"Daisy",
	"Dusty",
	"Felix",
	"Fluffy",
	"Garfield",
	"George",
	"Ginger",
	"Gizmo",
	"Gracie",
	"Harley",
	"Jack",
	"Jasmine",
	"Jasper",
	"Kiki",
	"Kitty",
	"Leo",
	"Lilly",
	"Lily",
	"Loki",
	"Lola",
	"Lucky",
	"Lucy",
	"Luna",
	"Maggie",
	"Max",
	"Mia",
	"Midnight",
	"Milo",
	"Mimi",
	"Miss kitty",
	"Missy",
	"Misty",
	"Mittens",
	"Molly",
	"Muffin",
	"Nala",
	"Oliver",
	"Oreo",
	"Oscar",
	"Patches",
	"Peanut",
	"Pepper",
	"Precious",
	"Princess",
	"Pumpkin",
	"Rascal",
	"Rocky",
	"Sadie",
	"Salem",
	"Sam",
	"Samantha",
	"Sammy",
	"Sasha",
	"Sassy",
	"Scooter",
	"Shadow",
	"Sheba",
	"Simba",
	"Simon",
	"Smokey",
	"Snickers",
	"Snowball",
	"Snuggles",
	"Socks",
	"Sophie",
	"Spooky",
	"Sugar",
	"Tiger",
	"Tigger",
	"Tinkerbell",
	"Toby",
	"Trouble",
	"Whiskers",
	"Willow",
	"Zoe",
	"Zoey"
]


function createCatObject(catImg,id,minAge,maxAge,lat,lng,maxRadius) {
    return {
        id,
        name: _getCatName(),
        img: catImg,
        age: _getCatAge(minAge,maxAge),
        coords: _getCatLocation(lat,lng,maxRadius)
    }
}

function _getCatName() {
    const rand = utilService.getRandomInt(0,catNames.length)
    return catNames[rand]
}

function _getCatAge(minAge=0,maxAge=12) {
    
    const catAge = utilService.getRandomInt(minAge*12,maxAge*12)
    if (catAge < 12) return `${catAge} months`
    return `${Math.floor(catAge /12)}`
}

function _getCatLocation(lat,lng,maxRadius) {

    const distance = maxRadius/100 / Math.PI * 2
    // const distanceForCalc = distance * 10000
    const outputLat = utilService.getRandomInt(lat*10000 - distance*10000 , lat*10000 + distance *10000) / 10000
    const outputLng = utilService.getRandomInt(lng*10000 - distance*10000 , lng*10000 + distance * 10000) / 10000
    
    return {
        lat: outputLat,
        lng: outputLng
    }
}


