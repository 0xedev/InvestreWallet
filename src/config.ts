import { createAppKit } from "@reown/appkit";
import {
  mainnet,
  polygon,
  base,
  solana,
  arbitrum,
  optimism,
} from "@reown/appkit/networks";
import type { AppKitNetwork } from "@reown/appkit/networks";

// Get projectId from https://dashboard.reown.com
export const projectId =
  import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694";
if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Define networks
export const networks = [
  mainnet,
  polygon,
  base,
  solana,
  arbitrum,
  optimism,
] as [AppKitNetwork, ...AppKitNetwork[]];

// Create AppKit instance with embedded wallet
export const appKit = createAppKit({
  projectId,
  networks,
  metadata: {
    name: "InvestreWallet",
    description: "A modern crypto wallet application",
    url: import.meta.env.DEV ? "http://localhost:5173" : "https://investrewallet.com",
    icons: ["https://investrewallet.com/icon.png"],
  },
  features: {
    analytics: true,
    email: false,
    socials: false,
    emailShowWallets: false,
  },
});
