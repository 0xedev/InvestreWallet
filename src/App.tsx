import { useState, useEffect } from "react";
import { getUniversalConnector } from "./config";
import { UniversalConnector } from "@reown/appkit-universal-connector";
import "./App.css";

function App() {
  const [universalConnector, setUniversalConnector] =
    useState<UniversalConnector>();
  const [session, setSession] = useState<any>();
  const [isConnecting, setIsConnecting] = useState(false);

  // Initialize the Universal Connector on component mount
  useEffect(() => {
    getUniversalConnector().then(setUniversalConnector);
  }, []);

  // Set the session state in case it changes
  useEffect(() => {
    setSession(universalConnector?.provider.session);
  }, [universalConnector?.provider.session]);

  // Connect to wallet
  const handleConnect = async () => {
    if (!universalConnector) {
      return;
    }

    setIsConnecting(true);
    try {
      const { session: providerSession } = await universalConnector.connect();
      setSession(providerSession);
    } catch (error) {
      console.error("Failed to connect:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  // Disconnect wallet
  const handleDisconnect = async () => {
    if (!universalConnector) {
      return;
    }

    try {
      await universalConnector.disconnect();
      setSession(null);
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>InvestreWallet</h1>
        <p>A modern crypto wallet application</p>
      </header>

      <main className="app-main">
        {!session ? (
          <div className="connect-section">
            <h2>Connect Your Wallet</h2>
            <p>
              Connect to your favorite wallet to start managing your crypto
              assets securely.
            </p>
            <button
              onClick={handleConnect}
              disabled={isConnecting || !universalConnector}
              className="connect-button"
            >
              {isConnecting ? "Connecting..." : "Connect Wallet"}
            </button>
          </div>
        ) : (
          <div className="wallet-section">
            <h2>Wallet Connected</h2>
            <div className="session-info">
              <p>
                <strong>Connected to:</strong>{" "}
                {session.peer?.metadata?.name || "Unknown Wallet"}
              </p>
              <p>
                <strong>Address:</strong>{" "}
                {session.namespaces?.eip155?.accounts?.[0]?.split(":")[2] ||
                  "N/A"}
              </p>
              <p>
                <strong>Network:</strong>{" "}
                {session.namespaces?.eip155?.chains?.[0] || "N/A"}
              </p>
            </div>
            <button onClick={handleDisconnect} className="disconnect-button">
              Disconnect
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
