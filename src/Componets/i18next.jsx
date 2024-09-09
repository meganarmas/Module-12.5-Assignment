import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';   

const resources = {
    en: {
        translation: {
            welcomeMessage: "Welcome to the API blog!",
            addMessage: "Add A Post",
            updateMessage: "Update Post",
            commnetMessage: "Comment",
        },
    },
    spn: {
        translation: {
            welcomeMessage: "¡Bienvenido al blog de API!",
            addMessage: "Agregar una publicación",
            updateMessage: "Actualizar publicación",
            deleteMessage: "Comentario",
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;