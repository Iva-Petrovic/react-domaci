import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export function Greska(){
    return (

        <ComponentError className="container">

            <div className="row">

                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Greska!</h1>
                        <h2>ERROR 404 / Trazena stranica ne postoji!</h2>

                        <div className="error-details">

                            Molimo Vas da se vratite na stranice koje postoje na sajtu!

                        </div> <br></br>

                        <div className="error-actions">

                            <Link className="btn btn-outline-primary btn-lg" to="/"> Vrati se na pocetnu stranicu :D </Link>

                        </div>

                    </div>
                </div>

            </div>

        </ComponentError>

    );
}

const ComponentError = styled.div`
    .error-template{
        padding: 40px 15px;
        text-align: center;
    }

    .error-actions{
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .btn{
        margin-right: 10px;
    }

`;