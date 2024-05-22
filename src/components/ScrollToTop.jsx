import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // Dépendance sur le chemin pour réagir aux changements

    return null; // Ce composant ne rend rien visuellement
}

export default ScrollToTop;