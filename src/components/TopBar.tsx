import { ReactElement } from "react";
import './styles/TopBar.scss'

export default function TopBar():ReactElement{
    return(
        <nav className="comp-top-bar">
            <a href="/">Home</a>
        </nav>
    )
}