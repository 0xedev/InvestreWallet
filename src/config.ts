import type { AppKitNetwork } from "@reown/appkit/networks";
import type { CustomCaipNetwork } from "@reown/appkit-common";
import { UniversalConnector } from "@reown/appkit-universal-connector";

// Get projectId from https://dashboard.reown.com
export const projectId =
  import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694";
if (!projectId) {
  throw new Error("Project ID is not defined");
}

// you can configure your own network
const BaseMainnet: CustomCaipNetwork<"sui"> = {
  id: 8453,
  chainNamespace: "sui" as const,
  caipNetworkId: "sui:mainnet",
  name: "Sui",
  nativeCurrency: { name: "SUI", symbol: "SUI", decimals: 9 },
  rpcUrls: { default: { http: ["https://fullnode.mainnet.sui.io:443"] } },
};

export const networks = [BaseMainnet] as [AppKitNetwork, ...AppKitNetwork[]];

export async function getUniversalConnector() {
  const universalConnector = await UniversalConnector.init({
    projectId,
    metadata: {
      name: "Universal Connector",
      description: "Universal Connector",
      url: "https://appkit.reown.com",
      icons: ["https://appkit.reown.com/icon.png"],
    },
    networks: [
      {
        methods: ["BaseMainnet_signPersonalMessage"],
        chains: [BaseMainnet as CustomCaipNetwork],
        events: [],
        namespace: "BaseMainnet",
      },
    ],
  });

  return universalConnector;
}
