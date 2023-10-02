import './Button.scss';

import { ButtonInt } from 'src/interfaces';

function Button({text='', type='button', callback}:ButtonInt) {
    return (
        <button type={type} className='button-more' onClick={callback}>
            {text}
        </button>
    )
}

export default Button;