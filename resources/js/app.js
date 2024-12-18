import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createInertiaApp } from '@inertiajs/inertia-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { InertiaProgress } from '@inertiajs/progress'; 
import 'react-toastify/dist/ReactToastify.css';

createInertiaApp({
    resolve: name => require(`./Pages/${name}`).default,
    setup({ el, App, props }) {
        const root = createRoot(el); 
        root.render(
            <>
                <App {...props} />
                <ToastContainer />
            </>
        );
    },
});

InertiaProgress.init({
    // Konfigurasi opsional
    color: '#4B5563', // Warna progress bar (default: biru)
    showSpinner: true, // Menampilkan spinner (default: true)
});