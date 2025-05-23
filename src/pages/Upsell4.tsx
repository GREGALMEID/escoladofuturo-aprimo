import React, { useState, useEffect } from 'react';
import useUtmNavigator from '../hooks/useUtmNavigator';
import { Check, Clock, AlertCircle, Loader2 } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full space-y-4">
        {/* Success Message */}
        <div className={`bg-white border border-green-100 rounded-lg p-6 ${step >= 2 ? 'opacity-50' : ''}`}>
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Inscrição realizada com sucesso
              </h2>
              <p className="text-gray-600">
                Seu formulário foi enviado e está sendo processado. Aguarde a validação dos dados informados.
              </p>
            </div>
          </div>
        </div>

        {/* Validation Pending */}
        {step >= 2 && (
          <div className={`bg-white border border-yellow-100 rounded-lg p-6 ${step >= 3 ? 'opacity-50' : ''}`}>
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  Validação pendente
                </h2>
                <p className="text-gray-600">
                  Estamos conferindo seus dados pessoais. Esse processo pode levar alguns minutos.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Payment Not Identified */}
        {step >= 3 && (
          <div className="bg-white border border-red-100 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    Pagamento não identificado
                  </h2>
                  <p className="text-gray-600">
                    Houve um problema na confirmação do pagamento da taxa de inscrição.
                    <br />
                    Por favor, acesse o checkout e conclua o pagamento para validar sua inscrição.
                  </p>
                </div>
                <button
                  onClick={() => window.location.href = 'https://pay.inscricao-escoladofuturo.online/DPXw3Xeo2qLZzmp?utm_source=utm_source&utm_campaign=utm_campaign&utm_medium=utm_medium&utm_content=utm_content'}
                  className="bg-[#4263EB] text-white px-6 py-2 rounded-md hover:bg-[#3b5bdb] transition-colors"
                >
                  Acessar Checkout
                </button>
                <p className="text-sm text-gray-500">
                  O valor anteriormente pago será automaticamente reembolsado.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Status */}
        {step >= 4 && (
          <div className="bg-white border border-gray-100 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Loader2 className="w-6 h-6 text-gray-600 animate-spin" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
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