import React, {useState} from 'react';

export const Gate = () => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleOpenGate = async () => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await fetch('be/controllers/gate.php', {
				method: 'GET'
			});

			if (!response.ok) {
				throw new Error(`Errore HTTP! Stato: ${response.status}`);
			}

			// const result = await response.json();
			// Gestire la risposta se necessario

			setSuccess(true);
			setLoading(false);
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError('Si è verificato un errore sconosciuto');
			}
			setLoading(false);
		}
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="card-box">
						<div className="card-body">
							<h2 className="title-box-2 text-center mb-4">
								Controllo Cancello
							</h2>

							<div className="text-center mb-5">
								<p className="lead">
									Premere il pulsante per aprire il cancello
								</p>

								<button
									className="btn btn-primary btn-lg"
									onClick={handleOpenGate}
									disabled={loading}
								>
									{loading ? (
										<>
											<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
											Apertura in corso...
										</>
									) : (
										"Apri Cancello"
									)}
								</button>
							</div>

							{success && (
								<div className="alert alert-success text-center" role="alert">
									<i className="bi bi-check-circle-fill me-2"></i>
									Comando inviato con successo! Il cancello si sta aprendo.
								</div>
							)}

							{error && (
								<div className="alert alert-danger text-center" role="alert">
									<i className="bi bi-exclamation-triangle-fill me-2"></i>
									Errore: {error}
									<div className="mt-2">
										<button className="btn btn-outline-danger btn-sm" onClick={handleOpenGate}>
											Riprova
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};