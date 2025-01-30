import {
    ButtonRegister ,
    Div1 ,
    Div2 ,
    Div3 , DivError ,
    DivFormRegister , DivFormRegisterContent ,
    InputRegister , LabelError , LabelRegister
} from "./Register.style.jsx";
import { LabelNav } from "../Login/Login.style.jsx";
import { useEffect , useState } from "react";
import { RegisterService } from "../../Services/RegisterService.js";


export const Register = () => {

    const [ formData , setFormData ] = useState ( {
        email: "" ,
        password: "" ,
        firstName: "" ,
        lastName: "" ,
        username: ""
    } );
    const [ errors , setErrors ] = useState ( {
        email: "" ,
        password: "" ,
        firstName: "" ,
        lastName: "" ,
        username: ""
    } );
    const [ userEmailConfirm , setUserEmailConfirm ] = useState ( "" );
    const [ userPasswordConfirm , setUserPasswordConfirm ] = useState ( "" );
    const [ showError , setShowError ] = useState ( false );
    const mdpRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$/;
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect ( () => {
        if (formData.lastName && formData.firstName !== "") {
            setFormData ( {
                ...formData ,
                "username": `${ formData.firstName } ${ formData.lastName }`
            } )
        }
    } , [ formData.firstName , formData.lastName ] );

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData ( {
            ...formData ,
            [name]: value
        } )
        setErrors ( {
            ...errors ,
            [name]: ""
        } )
    }
    const handleChangeError = (e) => {
        const {name , value} = e.target;
        console.log ( name )
        if (name === "email" && value === formData.email) {
            setErrors ( {
                ...errors ,
                [name]: ""
            } )
        } else if (name === "password" && value === formData.password) {
            setErrors ( {
                ...errors ,
                [name]: ""
            } )
        }
    }

    const verifData = () => {
        const newErrors = {};
        if (! formData.lastName) newErrors.lastName = "Le nom est requis";
        if (! formData.firstName) newErrors.firstName = "Le prénom est requis";
        if (! formData.password) {
            newErrors.password = "Le mot de pass est requis";
        } else if (! mdpRegex.test ( formData.password )) {
            newErrors.password = "Min. 10 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial."
        } else if (formData.password !== userPasswordConfirm) {
            newErrors.password = "Les mots de passe ne sont pas identique"
        }
        if (! formData.email) {
            newErrors.email = "L'email est requis";
        } else if (! mailRegex.test ( formData.email )) {
            newErrors.email = "L'email n'est pas valide";
        } else if (formData.email !== userEmailConfirm) {
            newErrors.email = "Les emails ne sont pas identique"
        }
        if (Object.keys ( newErrors ).length !== 0) {
            setErrors ( newErrors );
            setShowError ( true );
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault ();
        setShowError ( false )
        verifData ();

        // Vérification des erreurs avant de procéder à l'appel API
        if (Object.keys(errors).length > 0) return;

        try {
            await RegisterService.register ( formData );
            alert ( "Inscription réussi !" );
        } catch (error) {
            console.log ( "Erreur lors de l'inscription : " + error );
            alert ( "Une erreur est survenu lors de l'inscription !" );
        }
    }

    return (<>
        <DivFormRegister onSubmit={ handleRegister }>
            <LabelRegister>INSCRIPTION</LabelRegister>
            <DivFormRegisterContent>
                <Div1>
                    <InputRegister placeholder="NOM" name="lastName" onChange={ handleChange }/>
                    <DivError visibility={ showError ? "visible" : "hidden" }>
                        <LabelError>{ errors.lastName }</LabelError>
                    </DivError>
                    <InputRegister type="email" placeholder="EMAIL" name="email" onChange={ handleChange }/>
                    <DivError visibility={ showError ? "visible" : "hidden" }>
                        <LabelError>{ errors.email }</LabelError>
                    </DivError>
                    <InputRegister type="password" placeholder="MOT DE PASSE" name="password"
                                   onChange={ handleChange }/>
                    <DivError visibility={ showError ? "visible" : "hidden" }>
                        <LabelError>{ errors.password }</LabelError>
                    </DivError>
                </Div1>
                <Div2>
                    <InputRegister placeholder="PRENOM" name="firstName" onChange={ handleChange }/>
                    <DivError visibility={ showError ? "visible" : "hidden" }>
                        <LabelError>{ errors.firstName }</LabelError>
                    </DivError>
                    <InputRegister type="email" placeholder="EMAIL CONFIRMATION" name="email" onChange={ (e) => {
                        setUserEmailConfirm ( e.target.value )
                        handleChangeError ( e )
                    } }/>

                    <DivError visibility={ showError ? "visible" : "hidden" }>
                        <LabelError>{ errors.email }</LabelError>
                    </DivError>
                    <InputRegister type="password" placeholder="MOT DE PASSE CONFIRMATION" name="password"
                                   onChange={ (e) => {
                                       setUserPasswordConfirm ( e.target.value )
                                       handleChangeError ( e )
                                   } }/>
                    <DivError visibility={ showError ? "visible" : "hidden" }>
                        <LabelError>{ errors.password }</LabelError>
                    </DivError>
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