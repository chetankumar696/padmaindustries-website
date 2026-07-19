import { useState, useEffect } from "react";

import logo from "../assets/logo/logo.png";

import { navigation } from "../data/navigation";

import { COMPANY } from "../constants/company";

import Button from "./ui/Button";

import "../styles/navbar.css";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 80);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <nav className={scrolled ? "navbar-custom scrolled" : "navbar-custom"}>

            <div className="container navbar-wrapper">

                <div className="brand">

                    <img src={logo} alt="Logo"/>

                    <div>

                        <h4>{COMPANY.name}</h4>

                        <span>{COMPANY.tagline}</span>

                    </div>

                </div>

                <ul>

                    {navigation.map((item)=>(
                        <li key={item.name}>
                            <a href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    ))}

                </ul>

                <Button href="#contact">
                    Request Quote
                </Button>

            </div>

        </nav>

    );

}

export default Navbar;