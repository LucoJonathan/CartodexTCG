import { ButtonRegister , Div1 , Div2 , Div3 , DivFormRegister , InputRegister } from "./Register.style.jsx";

export const Register = () =>{
    return(<>
        <DivFormRegister>
            <Div1>
                <InputRegister placeholder="NOM" />
                <InputRegister placeholder="EMAIL" />
                <InputRegister placeholder="MOT DE PASSE" />
            </Div1>
            <Div2>
                <InputRegister placeholder="PRENOM" />
                <InputRegister placeholder="EMAIL CONFIRMATION" />
                <InputRegister placeholder="MOT DE PASSE CONFIRMATION" />
            </Div2>
            <Div3>
                <ButtonRegister>S'inscrire</ButtonRegister>
            </Div3>
        </DivFormRegister>
    </>);
};