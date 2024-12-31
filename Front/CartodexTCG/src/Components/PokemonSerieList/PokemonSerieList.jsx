import { ButtonCard , DivRow , DivPokemonSeason , PictureSeason } from "./PokemonSerieList.style.jsx";
import { Link } from "react-router-dom";

export const PokemonSerieList = () => {
    return (<>
        <DivPokemonSeason>
            <DivRow>
                <Link to={ `/ecarlate-et-violet` }>
                    <ButtonCard>
                        <PictureSeason src="EV.webp"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/epee-et-bouclier` }>
                    <ButtonCard>
                        <PictureSeason src="EB.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/soleil-et-lune` }>
                    <ButtonCard>
                        <PictureSeason src="SL.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/xy` }>
                    <ButtonCard>
                        <PictureSeason src="XY.png"/>
                    </ButtonCard>
                </Link>
            </DivRow>
            <DivRow>
                <Link to={ `/noir-et-blanc` }>
                    <ButtonCard>
                        <PictureSeason src="NB.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/appel-des-legendes` }>
                    <ButtonCard>
                        <PictureSeason src="Appel_Des_Legendes.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/hearthGold-soulSilver` }>
                    <ButtonCard>
                        <PictureSeason src="HGSS.webp" />
                    </ButtonCard>
                </Link>
                <Link to={ `/platine` }>
                    <ButtonCard>
                        <PictureSeason src="Platine.png"/>
                    </ButtonCard>
                </Link>
            </DivRow>
            <DivRow>
                <Link to={ `/diamant-et-perle` }>
                    <ButtonCard>
                        <PictureSeason src="DP.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/ex` }>
                    <ButtonCard>
                        <PictureSeason src="EX.png"/>
                    </ButtonCard>
                </Link>
                <Link to={ `/wizards` }>
                    <ButtonCard>
                        <PictureSeason src="Wizards.png"/>
                    </ButtonCard>
                </Link>
            </DivRow>
        </DivPokemonSeason>
    </>);
};