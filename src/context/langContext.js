import React, {useState} from "react";
import MessageEnglish from "../languages/en-US.json"
import MessageSpanish from "../languages/es-ES.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({children}) => {
    const [messages, setMessages] = useState(MessageEnglish);
    const[locale, setLocale] = useState("en-US");

    const setLanguage = (language) => {
        switch (language){
            case "es-ES":
                setMessages(MessageSpanish);
                setLocale("es-ES");
                break;
            case "es-ES":
                setMessages(MessageEnglish);
                setLocale("en-US");
                break;
            default:
                setMessages(MessageEnglish);
                setLocale("en-US"); 
        }
    }

    return (
        <langContext.Provider value={{setLanguage:setLanguage}}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export {langContext, LangProvider};