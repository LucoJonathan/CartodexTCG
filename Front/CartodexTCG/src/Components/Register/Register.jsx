import {
    ButtonRegister ,
    Div1 ,
    Div2 ,
    Div3 ,
    DivFormRegister , DivFormRegisterContent ,
    InputRegister , LabelRegister
} from "./Register.style.jsx";
import { LabelNav } from "../Login/Login.style.jsx";

export const Register = () => {
    return (<>

            <DivFormRegister>
                <LabelRegister>INSCRIPTION</LabelRegister>
                <DivFormRegisterContent>
                    <Div1>
                        <InputRegister placeholder="NOM"/>
                        <InputRegister type="email" placeholder="EMAIL"/>
                        <InputRegister type="password" placeholder="MOT DE PASSE"/>
                    </Div1>
                    <Div2>
                        <InputRegister placeholder="PRENOM"/>
                        <InputRegister type="email" placeholder="EMAIL CONFIRMATION"/>
                        <InputRegister type="password" placeholder="MOT DE PASSE CONFIRMATION"/>
                    </Div2>
                    <Div3>
                        <ButtonRegister type="submit">S'inscrire</ButtonRegister>
                        <div>
                            <LabelNav href="/login">Se connecter</LabelNav>
                        </div>
                    </Div3>
                </DivFormRegisterContent>
            </DivFormRegister>
    </>);
};