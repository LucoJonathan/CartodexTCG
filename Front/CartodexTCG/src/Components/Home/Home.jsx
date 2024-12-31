import { ButtonCard , PictureSeason } from "../PokemonSerieList/PokemonSerieList.style.jsx";
import { Link } from "react-router-dom";
import { DivHome , DivHomeContent , LabelHome } from "./Home.style.jsx";

export const Home = () => {


    return (
        <>
            <DivHome>
                <LabelHome>CHOISIR VOTRE TCG</LabelHome>
                <DivHomeContent>
                    <Link to={ `/pokemon` }>
                        <ButtonCard>
                            <PictureSeason src="home/logo_pokemon.png"/>
                        </ButtonCard>
                    </Link>
                </DivHomeContent>
            </DivHome>
        </>
    );
};