import { createContext, useState } from "react";

interface IConfigContext {
    handleChangeLanguage: () => void;
    handleChangeTheme: () => void;
    language: string;
    theme: string;
}

export const ConfigContext = createContext<IConfigContext>({
    handleChangeLanguage: () => {},
    handleChangeTheme: () => {},
    language: '',
    theme: '',
});

export const ConfigProvider = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    const [language, setLanguage] = useState('pt');
    const [theme, setTheme] = useState('dark');

    const handleChangeLanguage = () => {
        if (language === 'pt') {
            setLanguage('en');
            console.log('Linguagem alterada para inglês');
        } else {
            setLanguage('pt');
            console.log('Linguagem alterada para português');
        }
    };

    const handleChangeTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            console.log('Tema alterado para light')
        } else {
            setTheme('dark');
            console.log('Tema alterado para dark')
        }
    };

    return (
        <ConfigContext.Provider value={{ handleChangeLanguage, language, handleChangeTheme, theme }}>
            {children}
        </ConfigContext.Provider>
    );
};
