import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';

type useParameters = {
    idOperations: string;
    idTypeOperations: string;
};

const NuevasOperaciones = () => {
    const history = useHistory();
    const { idOperations, idTypeOperations } = useParams<useParameters>();

    const handleGoTo = () => {
        history.push("/");
        return undefined;
    }

    return (
        <div>
            <h1>Operaciones</h1>
            <p>{idOperations}-{idTypeOperations}</p>
            <Button onClick={handleGoTo}>ir al Menu</Button>
        </div>
    )
}


export default NuevasOperaciones;