import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

const style = {
    height: '120vh',
    backgroundImage: `url('/documentPageBackground.jpg')`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'cover'
}

const contentType = 'application/json'

export default function FirstFormBD({ textLines }) {

    const [isAddToDB, setAddToDB] = useState(false);
    const [isInputValidate, setInputValidate] = useState(false);

    const [inputText, setInputText] = useState('');

    const networkRequestAddToDB = async function () {
        try {
            const res = await fetch(`/api/documents`, {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(inputText)
            })
            if (!res.ok) {
                throw new Error(res.status)
            }
        } catch (error) {
            console.log(error);
        }
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    useEffect(() => {
        if (isAddToDB) {
            networkRequestAddToDB().then(() => {
                textLines.push({ 'text': inputText })
                setAddToDB(false);
                setInputText('');
                setInputValidate(false)
            });
        }
    }, [isAddToDB]);

    const handleClickAddToDB = () => setAddToDB(true);

    const handleChange = (e) => {
        setInputText(e.target.value);
        setInputValidate((e.target.value == null) || (e.target.value.match(/^[a-zA-Z0-9]+$/) != null));
    }

    return (
        <section className="d-flex align-items-center" style={style}>

            <Form className="mx-auto" style={{ "minWidth": "25%" }}>

                <Form.Group className="text-center" controlId="formBasicInput">
                    <Form.Label className="h5 text-light">Ваш текст</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Напишите любое значение"
                        value={inputText}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="text-center">
                    <ButtonGroup aria-label="Операции с базой данных">
                        <Button
                            variant="secondary"
                            type="submit"
                            disabled={(isAddToDB || !isInputValidate)}
                            onClick={isAddToDB ? null : handleClickAddToDB}
                        >
                            Добавить
                        </Button>
                    </ButtonGroup>
                    <Form.Text className="text-light bg-success">
                        {isAddToDB ? 'Операция с базой данных - добавление  ' : ''}
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <ListGroup>
                        {textLines.map((text, index) => (
                            <ListGroup.Item key={index}>
                                {text.text}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Form.Group>

            </Form>
        </section>
    );
};
