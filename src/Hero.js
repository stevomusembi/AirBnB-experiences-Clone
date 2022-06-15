import React from "react";
import hero from './airbnbhero.png'

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero--img" src={hero} alt="a hero banner of the website" />
            <h1 className="hero--heading">Online Experiences </h1>
            <p className="hero--text"> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}