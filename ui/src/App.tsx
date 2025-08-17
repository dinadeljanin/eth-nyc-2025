import './App.css'
import { useEffect } from "react";

// Deribit API function
const fetchDeribitVolatilityData = async () => {
	try {
		// Example query string - you can modify the parameters as needed
		const params = new URLSearchParams({
			currency: "BTC",
			start_timestamp: String(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
			end_timestamp: String(Date.now()),
		});

		const response = await fetch(
			`https://www.deribit.com/api/v2/public/get_volatility_index_data?${params}`,
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log("🔥 Deribit Volatility Data:", data);
		return data;
	} catch (error) {
		console.error("❌ Error fetching Deribit data:", error);
	}
};

function App() {
	useEffect(() => {
		// Fetch Deribit data on component mount
		fetchDeribitVolatilityData();
	}, []);

	return (
		<>
			<header>
				<div></div>
			</header>
			<main>
				<div className="ellipsis" />
				<section />
			</main>
			<footer>
				<div />
			</footer>
		</>
	);
}

export default App

