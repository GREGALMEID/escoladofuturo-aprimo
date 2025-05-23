import React, { useState, useEffect } from 'react';
import useUtmNavigator from '../hooks/useUtmNavigator';
import { Clock, CheckCircle2, AlertCircle, XCircle, Loader2 } from 'lucide-react';

const Upsell4: React.FC = () => {
  const navigate = useUtmNavigator();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState({ 1: true, 2: false, 3: false, 4: false });

  // Calculate progress based on current step (max 80%)
  const calculateProgress = () => {
    const progressPerStep = 20; // 80% total divided by 4 steps
    return Math.min(80, step * progressPerStep);
  };

  useEffect(() => {
    // Step 1 to 2 transition
    const timer1 = setTimeout(() => {
      setLoading(prev => ({ ...prev, 1: false, 2: true }));
      setTimeout(() => {
        setStep(2);
        setLoading(prev => ({ ...prev, 2: false }));
      }, 3000);
    }, 3000);

    // Step 2 to 3 transition
    const timer2 = setTimeout(() => {
      setLoading(prev => ({ ...prev, 3: true }));
      setTimeout(() => {
        setStep(3);
        setLoading(prev => ({ ...prev, 3: false }));
      }, 3000);
    }, 9000);

    // Step 3 to 4 transition
    const timer3 = setTimeout(() => {
      setLoading(prev => ({ ...prev, 4: true }));
      setTimeout(() => {
        setStep(4);
        setLoading(prev => ({ ...prev, 4: false }));
      }, 3000);
    }, 15000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
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
            className="h-2 bg-[#1351B4] rounded-full transition-all duration-300"
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>

        {/* Processing Message */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
          <div className="flex items-start gap-3">
            {loading[1] ? (
              <Loader2 className="w-6 h-6 text-blue-600 shrink-0 mt-1 animate-spin" />
            ) : (
              <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            )}
            <div>
              <h2 className="text-blue-700 font-semibold mb-1">
               Sua inscrição foi concluído!
              </h2>
              <p className="text-blue-600">
                Aguarde enquanto inserimos seus dados no formulário...
              </p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {step >= 2 && (
          <div className="bg-green-50 border border-green-100 rounded-lg p-6">
            <div className="flex items-start gap-3">
              {loading[2] ? (
                <Loader2 className="w-6 h-6 text-green-600 shrink-0 mt-1 animate-spin" />
              ) : (
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              )}
              <div>
                <h2 className="text-green-700 font-semibold mb-1">
                  Inscrição realizada com sucesso
                </h2>
                <p className="text-green-600">
                 Aguarde um momento...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Validation Message */}
        {step >= 3 && (
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-6">
            <div className="flex items-start gap-3">
              {loading[3] ? (
                <Loader2 className="w-6 h-6 text-yellow-600 shrink-0 mt-1 animate-spin" />
              ) : (
                <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
              )}
              <div>
                <h2 className="text-yellow-700 font-semibold mb-1">
                  Validação do CPF para Aprovação
                </h2>
                <p className="text-yellow-600">
                  Estamos conferindo seus dados pessoais. Esse processo pode levar alguns segundos.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Payment Message */}
        {step >= 4 && (
          <div className="bg-red-50 border border-red-100 rounded-lg p-6">
            <div className="flex items-start gap-3">
              {loading[4] ? (
                <Loader2 className="w-6 h-6 text-red-600 shrink-0 mt-1 animate-spin" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              )}
              <div className="space-y-4">
                <div>
                  <h2 className="text-red-700 font-semibold mb-1">
                     O valor da inscrição foi calculada errado para sua região.
                  </h2>
                  <p className="text-red-600">
                  O valor da inscrição foi calculado com acréscimo indevido.
                  </p>
                </div>
                
                <button
                  onClick={() => window.location.href = 'https://pay.inscricao-agenteescoladofuturo.online/JqoR32bN0763Vj5?utm_source=utm_source&utm_campaign=utm_campaign&utm_medium=utm_medium&utm_content=utm_content'}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  PAGAR INSCRIÇÃO
                </button>

                <p className="text-sm text-black-500">
                <strong> O Valor anterior pago será reembolsado. </strong>
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