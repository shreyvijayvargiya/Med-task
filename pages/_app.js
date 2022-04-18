
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import 'tailwindcss/tailwind.css';
import { Navbar } from '../modules';


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

