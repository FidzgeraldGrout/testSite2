
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/utills.module.css';

const containerStyle = {
    backgroundImage: `url('/Loreum.jpg')`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    minHeight: '30em',
    marginLeft: '2em',
    marginRight: '2em'
}

export default function FirstLoreum() {
    return (
        <section>
            <Jumbotron className={`bg-transparent ${styles.jumbotronResponsiveBackground}`} style={containerStyle} fluid>
                <Row className="mb-3 justify-content-end">
                    <Col xs={9} className="bg-light rounded-left">
                        <p className="h6 text-center text-black-50 font-weight-bold">
                            Забор и очистка воды, распределение и учет потребителям. Снижение потерь и аварийности, увеличение начислений. Снижение потерь от 20% до 40%, увеличение начисление на 20-50%, снижение аварийности до 50%
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3 justify-content-end">
                    <Col xs={9} className="bg-light rounded-left">
                        <p className="h6 text-center text-dark font-weight-bold">
                            Сбор и очистка сточных вод, Снижение аварийности на сетях. Плановые и предупредительные работы. Полный контроль и управление насосными станциями, снижение аварийности на 30%. Моделирование новых сетей
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3 justify-content-end">
                    <Col xs={9} className="bg-light rounded-left">
                        <p className="h6 text-center text-black-50 font-weight-bold">
                            Распределительные сети, ТП, РП. Эффективный поиск потерь на нижней стороне (0,4кВ), анализ нагрузки по зонам. Снижение потерь на 2-15%, снижение аварийности до 10%, увеличение начисление до 25%
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3 justify-content-end">
                    <Col xs={9} className="bg-light rounded-left">
                        <p className="h6 text-center text-dark font-weight-bold">
                            Зонирование тепловых сетей, расчет и выявление причин потерь тепла, сокращение потерь от 10 до 40%. Снижение аварийности на сетях. Плановые и предупредительные работы
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3 justify-content-end">
                    <Col xs={9} className="bg-light rounded-left">
                        <p className="h6 text-center text-black-50 font-weight-bold">
                            Контроль и автоматизированное управление режимами работ на тепловых станциях. Анализ работы котельного и насосного оборудования. Снижение простоев в работе
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col xs={9} className="bg-light rounded-left">
                        <p className="h6 text-center text-dark font-weight-bold">
                            Перевод районных котельных в автоматическое управление с дистанционным выставлением режимов работы. Контроль и мониторинг расхода топлива и электроэнергии
                        </p>
                    </Col>
                </Row>
            </Jumbotron>
        </section>
    );
};