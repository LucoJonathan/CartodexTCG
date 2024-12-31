import { ButtonCard , DivRow , DivPokemonSeason , PictureSeason } from "./PokemonSerieList.style.jsx";
import { Link } from "react-router-dom";

export const PokemonSerieList = () => {
    return (<>
        <DivPokemonSeason>
            <DivRow>
                <Link to={ `/ecarlate-et-violet` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/EV.webp"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/epee-et-bouclier` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/EB.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/soleil-et-lune` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/SL.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/xy` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/XY.png"/>
                    </ButtonCard>
                </Link>
            </DivRow>
            <DivRow>
                <Link to={ `/noir-et-blanc` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/NB.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/appel-des-legendes` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/Appel_Des_Legendes.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/hearthGold-soulSilver` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/HGSS.webp" />
                    </ButtonCard>
                </Link>
                <Link to={ `/platine` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/Platine.png"/>
                    </ButtonCard>
                </Link>
            </DivRow>
            <DivRow>
                <Link to={ `/diamant-et-perle` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/DP.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/ex` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/EX.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/wizards` }>
                    <ButtonCard>
                        <PictureSeason src="pokemon/Wizards.png"/>
                    </ButtonCard>
                </Link>
            </DivRow>
        </DivPokemonSeason>
    </>);
};