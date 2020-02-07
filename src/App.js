import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
// import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import Routes from './routes';

import Header from './components/Header';
// import store from './store';
// import history from './services/history';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
    // <Provider store={store}>
    //   <Router history={history}>
    // {/* <GlobalStyle /> */}
    //     <ToastContainer autoClose={3000} />
    // {/* <Header /> */}
    //     {/* <Routes /> */}
    //   </Router>
    // </Provider>
  );
}

export default App;
