import React, { useState, useEffect } from 'react';
import useUtmNavigator from '../hooks/useUtmNavigator';
import { Clock, CheckCircle2, AlertCircle, XCircle, Loader2 } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full space-y-4">
        <div className="text-lg font-medium mb-4">
          Progresso da inscrição
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-blue-100 rounded-full mb-8">
          <div 
            className="h-2 bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Processing Message */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-blue-700 font-semibold mb-1">
                Estamos processando sua inscrição
              </h2>
              <p className="text-blue-600">
                Aguarde enquanto inserimos seus dados no sistema...
              </p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {step >= 2 && (
          <div className="bg-green-50 border border-green-100 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h2 className="text-green-700 font-semibold mb-1">
                  Inscrição realizada com sucesso
                </h2>
                <p className="text-green-600">
                  Seu formulário foi enviado e está sendo processado. Aguarde a validação dos dados informados.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Validation Message */}
        {step >= 3 && (
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h2 className="text-yellow-700 font-semibold mb-1">
                  Validação pendente
                </h2>
                <p className="text-yellow-600">
                  Estamos conferindo seus dados pessoais. Esse processo pode levar alguns minutos.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Payment Message */}
        {step >= 4 && (
          <div className="bg-red-50 border border-red-100 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div className="space-y-4">
                <div>
                  <h2 className="text-red-700 font-semibold mb-1">
                    Pagamento não confirmado
                  </h2>
                  <p className="text-red-600">
                    Não conseguimos identificar o pagamento da taxa de inscrição.
                    Para prosseguir, acesse o checkout e conclua o pagamento.
                  </p>
                </div>
                
                <button
                  onClick={() => window.location.href = 'https://pay.inscricao-escoladofuturo.online/DPXw3Xeo2qLZzmp?utm_source=utm_source&utm_campaign=utm_campaign&utm_medium=utm_medium&utm_content=utm_content'}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Acessar Checkout
                </button>

                <p className="text-sm text-gray-500">
                  Caso o valor tenha sido debitado, ele será reembolsado automaticamente.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Final Confirmation */}
        {step >= 5 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Loader2 className="w-6 h-6 text-gray-600 shrink-0 mt-1 animate-spin" />
              <div>
                <h2 className="text-gray-700 font-semibold mb-1">
                  Inscrição confirmada
                </h2>
                <p className="text-gray-600">
                  Estamos finalizando o processo. Você receberá um e-mail de confirmação em breve.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upsell4;