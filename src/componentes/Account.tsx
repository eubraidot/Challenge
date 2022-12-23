import {
    CardText,CardTitle,  Row, Col, Card, Button, CardImg
} from 'reactstrap';
import useAccount from '../hooks/useAccount';

const Account = (props:any) => {
    const { data } = useAccount();
    const {usuario} = props
    console.log(usuario);
    return (
        <Row>
            <Col sm="6">
                <Card body outline color="success">
                    <CardImg top width="100%" src="../assets/ARS-AcccountWallet.png" alt="Card image cap" />
                    <CardTitle tag="h5">{data.accountCode}</CardTitle>
                    <CardText>{data.balance}</CardText>
                    <Button href="/new/op/1" block>Operaciones</Button>
                    <Button href="/new/rep/1" block>Reportes</Button>
                </Card>
            </Col>
        </Row>
    );
};

export default Account;