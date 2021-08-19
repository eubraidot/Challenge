import React from 'react'
import { Button } from 'reactstrap'
import Account from '../componentes/Account'
import GenericButton from '../componentes/GenericButton'
import {Link} from "react-router-dom";
import NuevasOperaciones from './NuevasOperaciones';

function Principal() {
    return (
        <div>
            <h1>Bienvendio a Personal Waller!!</h1>
            <Account></Account>
            <Link to={"new"}>{NuevasOperaciones}</Link>
        </div>
    )
}

export default Principal;
