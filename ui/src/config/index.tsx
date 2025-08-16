import type { AppKitNetwork } from "@reown/appkit/networks";
import { mainnet } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

// todo get project ID from reown
export const projectId = import.meta.env.VITE_PROJECT_ID;

// also todo.. name this??
export const metadata = {
	name: "",
	description: "",
	url: "",
	icons: "",
};

export const networks = [mainnet] as [AppKitNetwork, ...AppKitNetwork[]];
export const wagmiAdapter = new WagmiAdapter({ projectId, networks });

export const config = wagmiAdapter.wagmiConfig;