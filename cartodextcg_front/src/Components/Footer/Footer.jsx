import { DivFooter } from "./Footer.style.jsx";
import { useState } from "react";


export const Footer = () => {
    const [ yearDate , setYearDate ] = useState ( new Date ().getFullYear () );

    return (<>
        <DivFooter>
            <p>Copyright-{ yearDate }</p>
        </DivFooter>
    </>);
};