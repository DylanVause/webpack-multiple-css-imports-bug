import { ReactElement } from "react";
import "./Bar.css";

export default function Bar(p: { children?: string | ReactElement | ReactElement[] }) {
    return (<div className="bar">
        {p.children}
    </div>
    );
}