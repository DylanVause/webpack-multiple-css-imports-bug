import { ReactElement } from "react";
import "./Foo.css";

export default function Foo(p: { children?: string | ReactElement | ReactElement[] }) {
    return (<div className="foo">
        {p.children}
    </div>
    );
}