import React, { useContext } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import { AuthenticationContext } from "./context/AuthenticationContext";
import { ClientsProvider } from "./context/ClientsContext";
import { DocumentationProvider } from "./context/DocumentationContext";
import { DomainsProvider } from "./context/DomainsContext";

import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import Routes from "./routes/Routes";
import Loading from "./components/Loading/Loading";

const queryClient = new QueryClient();

const Tracker = () => {
  const { user, authenticating } = useContext(AuthenticationContext);

  if (authenticating) {
    return <Loading />;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DocumentationProvider>
          <DomainsProvider>
            <ClientsProvider>
              <main className="application">
                <Header />
                <section className="application__layout">
                  <Sidebar />
                  <section className="application__page">
                    <Routes />
                  </section>
                </section>
              </main>
            </ClientsProvider>
          </DomainsProvider>
        </DocumentationProvider>
      </QueryClientProvider>
    </>
  );
};

export default Tracker;
