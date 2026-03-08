"use client";

import { useState, useContext, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { DonationContext } from '../context/DonationContext';

// Remplacez par votre clé publique Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Montants prédéfinis en cents CAD (dollars canadiens)
const PRESET_AMOUNTS = [
  { label: '50 $ CAD', value: 5000 },
  { label: '75 $ CAD', value: 7500 },
  { label: '100 $ CAD', value: 10000 },
  { label: '150 $ CAD', value: 15000 },
  { label: '250 $ CAD', value: 25000 },
];

const AmountSelection = ({ selectedAmount, setSelectedAmount }) => {
  const [customAmount, setCustomAmount] = useState('');
  const [error, setError] = useState(null);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setError(null);
  };

  const handleCustomAmount = () => {
    const amount = parseInt(customAmount) * 100;
    if (amount > 0) {
      setSelectedAmount(amount);
      setError(null);
    } else {
      setError('Veuillez entrer un montant valide');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Sélection des montants prédéfinis */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Choisissez votre montant de contribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {PRESET_AMOUNTS.map((amount) => (
            <button
              key={amount.value}
              onClick={() => handleAmountSelect(amount.value)}
              className={`py-4 px-3 rounded-xl font-bold transition duration-300 transform hover:scale-110 shadow-md ${
                selectedAmount === amount.value
                  ? 'bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg scale-105'
                  : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-green-500 hover:shadow-lg'
              }`}
            >
              {amount.label}
            </button>
          ))}
        </div>

        {/* Montant personnalisé */}
        <div className="flex gap-2">
          <input
            type="number"
            min="1"
            placeholder="Montant personnalisé ($ CAD)"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 placeholder-gray-600 text-gray-900"
          />
          <button
            onClick={handleCustomAmount}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Ajouter
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-600 text-red-700 p-4 mt-4 rounded">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

const PaymentForm = ({ selectedAmount, setSelectedAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !selectedAmount || !fullName || !email) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setProcessing(true);

    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${typeof window !== 'undefined' ? window.location.origin : ''}/donation-success`,
          payment_method_data: {
            billing_details: {
              name: fullName,
              email: email,
            },
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
        setProcessing(false);
      }
    } catch (err) {
      setError('Une erreur est survenue');
      setProcessing(false);
    }
  };

  if (success) {
    return (
      <div className="text-center">
        <div className="text-green-600 text-lg font-semibold mb-4">✓ Paiement réussi !</div>
        <p className="text-gray-600">Merci pour votre contribution à la rénovation de l&apos;école Anténor Firmin</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border-2 border-gray-200 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="text-center mb-4">
          <p className="text-gray-600">Montant à payer</p>
          <p className="text-3xl font-bold text-green-600">{(selectedAmount / 100).toFixed(2)} $ CAD</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Nom complet</label>
        <input
          type="text"
          placeholder="Votre nom complet"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 placeholder-gray-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Courriel</label>
        <input
          type="email"
          placeholder="votre.email@exemple.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 placeholder-gray-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-3">Informations bancaires (Carte crédit ou débit)</label>
        <PaymentElement
          options={{
            layout: "tabs",
          }}
        />
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-600 text-red-700 p-4 mb-4 rounded">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {processing ? 'Traitement en cours...' : `Payer ${(selectedAmount / 100).toFixed(2)} $ CAD`}
      </button>

      <button
        type="button"
        onClick={() => {
          setSelectedAmount(null);
        }}
        className="w-full mt-2 text-gray-600 hover:text-gray-800 font-semibold py-2"
      >
        Modifier le montant
      </button>
    </form>
  );
};

const CheckoutForm = ({ selectedAmount, setSelectedAmount, loading }) => {
  if (!selectedAmount) {
    return <AmountSelection selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} />;
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Chargement du formulaire de paiement...</p>
      </div>
    );
  }

  return <PaymentForm selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} />;
};

function CheckoutFormWrapper({ selectedAmount, setSelectedAmount }) {
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedAmount) {
      setLoading(true);
      const createPaymentIntent = async () => {
        try {
          const response = await fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: selectedAmount,
              currency: 'cad',
            }),
          });

          const { clientSecret } = await response.json();
          setClientSecret(clientSecret);
        } catch (err) {
          console.error('Erreur:', err);
        } finally {
          setLoading(false);
        }
      };

      createPaymentIntent();
    } else {
      setClientSecret(null);
    }
  }, [selectedAmount]);

  // Si pas de montant sélectionné, afficher juste la sélection
  if (!selectedAmount) {
    return <CheckoutForm selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} loading={false} />;
  }

  // Si clientSecret est prêt, wrapper dans Elements et afficher le formulaire de paiement
  if (clientSecret) {
    const options = {
      clientSecret,
      appearance: {
        theme: 'stripe',
      },
    };

    return (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} loading={false} />
      </Elements>
    );
  }

  // Pendant le chargement du clientSecret
  return <CheckoutForm selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} loading={true} />;
}

export default function StripeCheckout() {
  const { selectedAmount: contextSelectedAmount, setSelectedAmount: setContextSelectedAmount } = useContext(DonationContext);
  const [selectedAmount, setSelectedAmount] = useState(contextSelectedAmount);

  useEffect(() => {
    if (contextSelectedAmount) {
      setSelectedAmount(contextSelectedAmount);
      setContextSelectedAmount(null);
    }
  }, [contextSelectedAmount, setContextSelectedAmount]);

  return (
    <section id="donation" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contribuer à la rénovation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chaque contribution, peu importe le montant, nous aide à reconstruire l&apos;école Anténor Firmin et à offrir un meilleur avenir aux enfants de Belladère.
          </p>
        </div>
        <CheckoutFormWrapper selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} />
      </div>
    </section>
  );
}
