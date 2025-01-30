import { DivHeader , DivHouse , DivLogo , DivNav , DivUser , Logo , StyledIcon } from "./Header.style.jsx";
import { faCircleUser , faHouse } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../Services/AuthProvider.jsx";


export const Header = () => {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <DivHeader>
                <DivNav>
                    <DivLogo>
                        <Logo src="vite.svg"/>
                    </DivLogo>
                    { isAuthenticated ? (<><DivHouse>
                        <a href="/home">
                            <StyledIcon icon={ faHouse }/>
                        </a>
                    </DivHouse>
                        <DivUser>
                            <a href="/profile">
                                <StyledIcon icon={ faCircleUser }/>
                            </a>
                        </DivUser></>) : (<><DivUser>
                        <a href="/">
                            <StyledIcon icon={ faCircleUser }/>
                        </a>
                    </DivUser></>) }

                </DivNav>
            </DivHeader>
        </>
    );
};
