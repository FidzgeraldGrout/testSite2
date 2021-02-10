

const containerStyle = {
    minHeight: '3rem'
}

export default function FirstFooter() {
    return (
        <footer className="d-flex align-items-center justify-content-center bg-dark" style={containerStyle}>
            <a href='https://agis.kz/' className="h4 text-center text-secondary" target="_blank" rel="noopener noreferrer">
                @ Создано по техническому заданию для AGIS. 2020
            </a>
        </footer>
    );
};