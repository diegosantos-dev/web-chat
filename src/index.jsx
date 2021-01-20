import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Routes from 'utils/routers';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'assets/styles/base';
import theme from 'assets/styles/theme';
import flattenMessages from 'helpers/flattenMessages';
import { ptBr } from 'locale';

ReactDOM.render(
  <IntlProvider locale={'pt-BR'} messages={flattenMessages(ptBr)}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Provider>
  </IntlProvider>,
  document.getElementById('root')
);
