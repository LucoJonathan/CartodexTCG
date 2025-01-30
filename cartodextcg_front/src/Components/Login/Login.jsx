import {
    ButtonConnect ,
    DivFormLogin ,
    DivLabel ,
    DivTitleForm ,
    InputEmail ,
    InputPassword ,
    LabelNav
} from "./Login.style.jsx";
import { DivError , LabelError } from "../Register/Register.style.jsx";
import { useState } from "react";

export const Login = () => {
    const [ showError , setShowError ] = useState ( false );
    const [ formData , setFormData ] = useState ( {
        email: "" ,
        password: ""
    } );
    const [ errors , setErrors ] = useState ( "" );
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const verifDataForm = () => {
        let newErrors = "";
        if (! formData.password || ! formData.email) {
            newErrors = "Tout les champs ne sont pas remplis";
        }else if(!mailRegex.test(!formData.email)){
            newErrors = "Adresse mail non valide";
        }

        if (Object.keys ( newErrors ).length !== 0) {
            setErrors ( newErrors );
            setShowError ( true );
        }
    }

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData ( {
            ...formData ,
            [name]: value
        } )
        setErrors ( "" )
    }

    const handleLogin = async (e) => {
        e.preventDefault ();
        setShowError ( false );
        verifDataForm ();
        if(showError){
            alert("Il y a des erreurs à corriger avant d'envoyer le formulaire.");
            return;
        }

    }

    return (
        <>
            <DivFormLogin onSubmit={ handleLogin }>
                <DivTitleForm>CONNEXION</DivTitleForm>
                <InputEmail type="email" placeholder="EMAIL" name="email" onChange={ handleChange }/>
                <InputPassword type="password" placeholder="MOT DE PASSE" name="password" onChange={ handleChange }/>
                <DivError visibility={ showError ? "visible" : "hidden" }>
                    <LabelError>{ errors }</LabelError>
                </DivError>
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