import React, { useEffect, useState } from 'react';

export const PvIp = () => {
	const [ip, setIp] = useState<string | null>(null);

	useEffect(() => {
		async function pvip() {
			try {
				const response = await fetch('https://www.simonecelia.it/ipapi/be/ip/read.php');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const ipText = await response.text();
				setIp(ipText);
			} catch (error) {
				console.error('Errore durante la richiesta:', error);
				setIp('Errore nel caricamento dell\'IP');
			}
		}

		pvip();
	}, []);

	return (
		<div>
			<p>{ip ? ip : 'Caricamento in corso...'}</p>
		</div>
	);
}