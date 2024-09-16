/* eslint-disable react/prop-types */

import './ThemedButton.css';

export default function ThemedButton ({ children, isInvertButtonType }) {
    return (
        <button className={isInvertButtonType ? 'themed-invert-button' : 'themed-button'}>
            {children}
        </button>
    )
}