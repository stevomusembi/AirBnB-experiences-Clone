import React from "react";
import { FaGithubSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="footer">
            © 2022 Airbnb Clone by StevoM, Inc.
            <span className="icons">
                <FaTwitterSquare />
                <FaInstagramSquare />
                <FaLinkedin />
                <FaGithubSquare />
            </span>
        </footer>
    )
}