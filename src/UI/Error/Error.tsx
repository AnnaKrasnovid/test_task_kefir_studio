import './Error.scss';

function Error({ text = 'Ошибка' }) {
    return (
        <p className="error">{text}</p>
    )
}

export default Error;