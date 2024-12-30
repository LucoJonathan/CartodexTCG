import {
    ButtonConnect , DivFormLogin ,
    DivLabel ,
    DivTitleForm ,
    InputEmail ,
    InputPassword ,
    LabelNav
} from "./Login.style.jsx";


export const Login = () => {

    return (
        <>
            <DivFormLogin>
                <DivTitleForm>CONNEXION</DivTitleForm>
                <InputEmail placeholder="EMAIL"/>
                <InputPassword placeholder="MOT DE PASSE"/>
                <ButtonConnect type="submit">SE CONNECTER</ButtonConnect>
                <DivLabel>
                    <div>
                        <LabelNav href="/password-forgot">Mot de passe oublié</LabelNav>
                    </div>
                    <div>
                        <LabelNav href="/register">S'inscrire</LabelNav>
                    </div>
                </DivLabel>
            </DivFormLogin>
        </>
    )
};