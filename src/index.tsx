import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";

import i18n from "shared/config/i18n/i18n";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
