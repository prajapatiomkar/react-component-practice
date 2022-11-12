import React from 'react'
import "./ThemeToggle.css"
export default function ThemeToggle(props) {
    const styles = {
        cursor:"pointer",
        fontSize: "2rem",
        userSelect:"none",
        fontWeight:"bold",
        textTransform:"uppercase"
    }
    return (
        <div onClick={props.toggle} style={styles}>
           {props.theme ? "Light" : "Dark"}
        </div>
    )
}
