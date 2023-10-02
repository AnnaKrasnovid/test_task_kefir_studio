import { memo } from 'react';

import { ButtonInt } from 'src/interfaces';

import './Button.scss';

const Button = memo(({ text = '', type = 'button', callback }: ButtonInt) => {
    return (
        <button type={type} className='button-more' onClick={callback}>
            {text}
        </button>
    )
})

export default Button;