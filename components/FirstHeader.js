
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const containerStyle = {
    backgroundImage: `url('/header.jpg')`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    minHeight: '30em',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
}

export default function FirstHeader() {
    return (
        <header>
            <Jumbotron className='bg-transparent' style={containerStyle} fluid>
                <Container align="center">
                    <h1 className="display-4 text-danger font-weight-bold"> Решение Для Городских Служб </h1>
                    <p className="h4 text-light font-weight-bold"> Автоматизация городских коммунальных предпрятий </p>
                </Container>
            </Jumbotron>
        </header>
    );
};