import Layout from "@/pages/Layout";
import {useRouter} from "next/router";
import {IntlProvider} from "react-intl";
import am from '../I18n/am.json';
import en from '../I18n/en.json';
import ru from '../I18n/ru.json';
import '../styles/globalStyle.css';
const messages = {
    en,
    am,
    ru
}
export default function App({Component, pageProps}) {
    const {locale} = useRouter()
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </IntlProvider>
    )
}
