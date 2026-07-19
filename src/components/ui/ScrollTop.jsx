import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import "../../styles/scroll-top.css";

function ScrollTop() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const toggleVisible = () => {

            setVisible(window.scrollY > 300);

        };

        window.addEventListener("scroll", toggleVisible);

        return () => window.removeEventListener("scroll", toggleVisible);

    }, []);

    const scrollToTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    return (

        <button

            className={`scroll-top ${visible ? "show" : ""}`}

            onClick={scrollToTop}

        >

            <FaArrowUp />

        </button>

    );

}

export default ScrollTop;