"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DonationSuccess() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paymentIntentClientSecret = searchParams.get(
      "payment_intent_client_secret"
    );

    if (paymentIntentClientSecret) {
      setStatus("success");
    } else {
      setStatus("unknown");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-6">
          {status === "success" && (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Merci! 💚
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Votre donation a été reçue avec succès. Vous contribuez à la
                rénovation de l&apos;école Anténor Firmin!
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Un reçu de confirmation a été envoyé à votre courriel.
              </p>
            </>
          )}

          {status === "unknown" && (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Vérification en cours...
              </h1>
              <p className="text-gray-600 mb-8">
                Nous vérifions le statut de votre paiement. Veuillez vérifier
                votre courriel pour une confirmation.
              </p>
            </>
          )}
        </div>

        <Link
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
