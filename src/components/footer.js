import React from 'react'

import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <p>
            made with <span role="img" aria-label="heart">♥️</span> + <span role="img" aria-label="coffee">☕</span> in <span role="img" aria-label="finland">🇫🇮</span>
            </p>
        </footer>
    )
}

export default Footer