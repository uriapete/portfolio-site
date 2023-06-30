import { ReactElement } from "react";
import './styles/TopBar.scss'

export default function TopBar():ReactElement{
    return(
        <div className="comp-top-bar">
            <nav className="top-bar-nav">
                <a href="/">Home</a>
            </nav>
        </div>
    )
}