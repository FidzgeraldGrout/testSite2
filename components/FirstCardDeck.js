
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { FaSyncAlt, FaFireExtinguisher, FaTenge, FaServicestack } from 'react-icons/fa';

export default function FirstCardDeck() {
    return (
        <section>
            
            <Jumbotron className='bg-transparent'>

                <blockquote className="blockquote" align="center">
                    <h2 className="h1 font-weight-bold"> Для чего нужна автоматизация </h2>
                    <footer className="blockquote-footer font-italic">
                        «Предоставление потребителям качественных услуг – вода, свет, тепло, газ с минимальными издержками»
                    </footer>
                </blockquote>

                <CardDeck >

                    <Card className="text-center" border="warning">
                        <Card.Header>
                            <FaSyncAlt fill='#E46EB8' size='2em' />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="text-primary font-weight-bold"> Потери </Card.Title>
                            <Card.Text className="h6 text-black-50">
                                Снижение общих потерь от двадцати до сорока процентов. В том числе коммерческих до тридцати процентов, технологических потерь до десяти процентов
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="text-center" border="warning" bg='Primary'>
                        <Card.Header>
                            <FaFireExtinguisher fill='#E46EB8' size='2em' />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="text-primary font-weight-bold"> Аварийность </Card.Title>
                            <Card.Text className="h6 text-black-50">
                                Снижение аварийности на сетях от двадцати до пятидести процентов. Ежедневное сокращение количества заявок от потребителей.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="text-center" border="warning" bg='Primary'>
                        <Card.Header>
                            <FaTenge fill='#E46EB8' size='2em' />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="text-primary font-weight-bold"> Начисления </Card.Title>
                            <Card.Text className="h6 text-black-50">
                                Увеличение начисления на двадцать - пятьдесят процентов. Вы должны получать от потребителей справедливую оплату услуг за воду, свет, тепло и газ
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="text-center" border="warning" bg='Primary'>
                        <Card.Header>
                            <FaServicestack fill='#E46EB8' size='2em' />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="text-primary font-weight-bold"> Услуги </Card.Title>
                            <Card.Text className="h6 text-black-50">
                                Бесперебойное обеспечение водой, светом, теплом и газом 24 часа в сутки надлежащего качества. Вода должна быть безопасной, в розетке - 220В, батареи горячие
                        </Card.Text>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </Jumbotron>
        </section>
    );
};