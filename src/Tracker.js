import React, { useContext } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import { AuthenticationContext } from "./context/AuthenticationContext";
import { DocumentationProvider } from "./context/DocumentationContext";
import { DomainsProvider } from "./context/DomainsContext";

import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import Routes from "./routes/Routes";

const queryClient = new QueryClient();

const Tracker = () => {
  const { user, authenticating } = useContext(AuthenticationContext);

  if (authenticating) {
    return <p>Authenticating...</p>;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Sidebar />
        <DocumentationProvider>
          <DomainsProvider>
            <Routes />
          </DomainsProvider>
        </DocumentationProvider>
      </QueryClientProvider>
    </>
  );
};

export default Tracker;
