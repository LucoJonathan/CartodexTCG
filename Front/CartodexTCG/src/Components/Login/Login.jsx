import { ButtonConnect , DivFormLogin , DivTitleForm , InputEmail , InputPassword } from "./Login.style.jsx";


export const Login = () => {

    return (
        <>
            <DivFormLogin>
                <DivTitleForm>CONNEXION</DivTitleForm>
                <InputEmail placeholder="EMAIL"/>
                <InputPassword placeholder="MOT DE PASSE"/>
                <ButtonConnect>SE CONNECTER</ButtonConnect>
            </DivFormLogin>
        </>
    )
};