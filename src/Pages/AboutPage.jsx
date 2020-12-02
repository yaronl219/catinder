import { Dialog } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import grumpyCatImg from '../assets/imgs/grumpycat.jpg'

export function AboutPage() {

    const [isDialogOpen, setDialogOpen] = useState(false)

    let clickCount = 0

    useEffect(() => {
        window.addEventListener('click',onClick)
        return () => {
            window.removeEventListener('click',onClick)
        }
    }, [])

    function onClick() {
        clickCount += 1
        if (clickCount === 10) {
            clickCount = 0
            setDialogOpen(true)
        }
    }


    return (
        <section className="about-page">
            <div className="header">
                <h2>About <span>CaTinder</span></h2>
            </div>
            <div className="app-desc">
                <p>CaTinder started as a joke project to create, as you might have guessed, a Tinder for cats.</p>
                <p>If you're wondering, they wont like you back.</p>
                <p>They don't have thumbs...</p>
                <p>And also... they're cats...</p>
            </div>

            <div className="credits">
                <p>Thanks to <a href="https://thecatapi.com/">The Cat API</a> for the cat photos.</p>
                <p>This project was created by <a href="https://yaronl219.github.io/portfolio/">Yaron Lipshitz</a></p>
                <p>If you want to see more projects, visit my <a href="https://yaronl219.github.io/portfolio/"><span>portfolio</span></a></p>
            </div>
            <div className="adopt">
                <h4>Like the cats?</h4>
                <p>Why not <a href="https://www.google.com/search?q=adopt+a+pet&oq=adopt+a+pet">Adopt a new friend?</a></p>
            </div>
            <div className="tools">
                <h4>Tools used in this project:</h4>
                <ul>
                    <li>React</li>
                    <li>MobX</li>
                    <li>SCSS</li>
                    <li>Material UI</li>
                </ul>
            </div>
            
            <Dialog open={isDialogOpen } onBackdropClick={() => {setDialogOpen(false)}}>
                <div onClick={() => {setDialogOpen(false)}} className="easter-egg">
                    <img src={grumpyCatImg} alt="grumpy cat"/>
                </div>
            </Dialog>
        </section>
    )
}
