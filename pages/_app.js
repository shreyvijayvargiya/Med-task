
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Navbar } from '../modules';
import 'tailwindcss/tailwind.css';
import "../global.css";

const MyApp = ({ Component, pageProps }) => {

    return (
        <ThemeProvider>
            <div>
                <Navbar />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>

    );

};

export default MyApp;

