import { useState } from 'react'
// import HeaderNav from './components/HeaderNav/HeaderNav.jsx';
// import ContactUs from './components/ContactUs/ContactUs.jsx';
// import FooterNav from './components/FooterNav/FooterNav.jsx';
// import ViewAllReceipts from './components/ViewAllReceipts/ViewAllReceipts.jsx';
import Export from './components/ExportReceipts/Export.jsx';
// import Dashboard from './components/Dashboard/Dashboard.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
// import LogoutPage from './components/LogoutPage/LogoutPage.jsx';
import SettingsPage from './components/SettingsPage/SettingsPage.jsx';
import RegistrationPage from './components/RegistrationPage/RegistrationPage.jsx';
import CreateReceipt from './components/CreateReceipt/CreateReceipt.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import './App.css'
import Profile from './components/Profile/Profile.jsx';
//import RegistrationPage from './components/RegistrationPage/RegistrationPage.jsx';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <Routes>

          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/CreateReceipt" element={<CreateReceipt />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Export" element={<Export />} />
          <Route path="/SettingsPage" element={<SettingsPage />} />
          {/* <Route path="/RegistrationPage" element={<RegistrationPage />} /> */}
          <Route path="/LoginPage" element={<LoginPage />} />

        </Routes>







        {/* //     <HeaderNav />
    //     <LoginPage />
    //     <HomePage />
    //     <Dashboard />
    //     <SettingsPage />

    //     <CreateReceipt />
    //     <ViewAllReceipts />
    //     <SettingsPage />
    //     <ContactUs />
    //     <LogoutPage />
    //     <FooterNav /> */}




      </Router>
    </ApolloProvider>

  )
}

export default App;
