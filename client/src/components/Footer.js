import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Dynamically fetch the current year

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>
                    &copy; {currentYear} Atharva Dharankar. All rights reserved.
                </p>
                <ul style={styles.socialLinks}>
                    <li>
                        <a href="https://twitter.com" style={styles.link} target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/atharva-dharankar0007" style={styles.link} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/adi-dharankar-321883290/" style={styles.link} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#343a40', // Dark background
        color: '#fff', // Light text
        padding: '1 rem 0',
        textAlign: 'center',
    },
    container: {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '0 1 rem',
    },
    text: {
        margin: '0',
        fontSize: '0.8rem',
    },
    socialLinks: {
        listStyleType: 'none',
        padding: '0',
        margin: '1rem 0 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
    },
    link: {
        color: '#f8f9fa',
        textDecoration: 'none',
        fontSize: '0.8rem',
        transition: 'color 0.3s ease',
    },
};

export default Footer;
