import React, {useEffect, useState} from 'react';

export const Gate = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('be/controller/gate.php', {method: 'GET'});

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				// const result = await response.json();
				// setData(result);
				setLoading(false);
			} catch (err) {
				// Type checking for the error
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('An unknown error occurred');
				}
				setLoading(false);
			}
		};

		fetchData();

		return () => {
			// Cleanup code here if needed
		};
	}, []);

	if (loading) return <div>Caricamento in corso...</div>;
	if (error) return <div>Errore: {error}</div>;

	return (
		<>
			Apertura cancello, ricaricare la pagina in caso
			{/*{data && <div>Dati ricevuti: {JSON.stringify(data)}</div>}*/}
		</>
	);
};