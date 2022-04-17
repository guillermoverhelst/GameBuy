import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Autenticacion = (props) => {

    //Modificador de estado de visibilidad para el formulario crear cuenta
    const [visCrearCuenta, setVisCrearCuenta] = useState(false);

    //Estados para formulario login
    const [nombreUsu, setNombreUsu] = useState('');
    const [claveUsu, setClaveUsu] = useState('');

    let history = useNavigate()

    //Funcion para logear usuario
    const logearUsuario = e => {
        e.preventDefault();
        console.log('nombre',nombreUsu);
        console.log('clave',claveUsu);

        //Redirecconar al usuario a la pagina principal
        history('/inicio')
    }


    return (
        <div className="contenedor">
            <div>
                <h3>Login</h3>
                <form className="formulario" onSubmit={logearUsuario}>
                    <div className="campo">
                        <label htmlFor="">Nombre de usuario</label>
                        <input 
                            type="text" 
                            placeholder="juan123" 
                            name="nombre usuario"
                            onChange={ e => {setNombreUsu(e.target.value)}}
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="">Contraseña</label>
                        <input 
                            type="password" 
                            placeholder="******" 
                            name="clave usuario"
                            onChange={ e => {setClaveUsu(e.target.value)}}
                        />
                    </div>

                    <input type="submit" value="Entrar" />
                </form>
                
                <p>No tienes una cuenta? <span onClick={() => {setVisCrearCuenta(!visCrearCuenta)}}>Crear cuenta</span> </p>
            </div>
            {visCrearCuenta ?  
                <div>
                    <h3>Crear cuenta</h3>
                    <form className="formulario" action="">
                        <div className="campo">
                            <label htmlFor="">Nombre</label>
                            <input type="text" placeholder="Juan" />
                        </div>
                        <div className="campo">
                            <label htmlFor="">Apellido</label>
                            <input type="text" placeholder="Correa" />
                        </div>
                        <div className="campo">
                            <label htmlFor="">Nombre de usuario</label>
                            <input type="text" placeholder="JuanC123" />
                        </div>
                        <div className="campo">
                            <label htmlFor="">E-mail</label>
                            <input type="text" placeholder="juanC@hotmail.com" />
                        </div>
                        <div className="campo">
                            <label htmlFor="">Contraseña</label>
                            <input type="password" placeholder="******" />
                        </div>
                        <div className="campo">
                            <label htmlFor="">Repita la Contraseña</label>
                            <input type="password" placeholder="******" />
                        </div>

                        <input type="submit" />
                    </form>
                </div>
            : 
                null
            }
            
        </div>
    );
};

export default Autenticacion;
