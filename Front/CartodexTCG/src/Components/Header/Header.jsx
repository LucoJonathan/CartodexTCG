import { DivHeader , DivHouse , DivLogo , DivNav , DivUser , Logo , StyledIcon } from "./Header.style.jsx";
import { faCircleUser , faHouse } from "@fortawesome/free-solid-svg-icons";


export const Header = () => {
    return (
        <>
            <DivHeader>
                <DivNav>
                    <DivLogo>
                        <Logo src="vite.svg"/>
                    </DivLogo>
                    <DivHouse>
                        <a href="/home">
                            <StyledIcon icon={ faHouse }/>
                        </a>
                    </DivHouse>
                    <DivUser>
                        <a href="/profile">
                            <StyledIcon icon={ faCircleUser }/>
                        </a>
                    </DivUser>
                </DivNav>
            </DivHeader>
        </>
    );
};
