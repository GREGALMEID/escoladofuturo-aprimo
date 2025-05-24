import React, { useState, useEffect } from 'react';
import useUtmNavigator from '../hooks/useUtmNavigator';

const Upsell1: React.FC = () => {
  const navigate = useUtmNavigator();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(2), 1000);
    const timer2 = setTimeout(() => setStep(3), 2000);
    const timer3 = setTimeout(() => setStep(4), 3000);

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
            Sua inscrição foi concluída!
          </h2>
          <p className="text-gray-600 mb-4">
            Aguarde enquanto inserimos seus dados no formulário...
          </p>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Second Message - Preferential Spot */}
        {step >= 2 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500 text-xl">⚠️</span>
              <h2 className="text-xl font-bold text-green-700">Atenção: Vaga Preferencial Disponível</h2>
            </div>
            
            <p className="mb-4">Parabéns! Sua inscrição foi recebida com sucesso.</p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="font-medium mb-2">
                Agora você pode garantir a preferência para trabalhar em uma escola próxima da sua casa.
              </p>
              <p>
                Essa é uma oportunidade exclusiva para quem acabou de se inscrever.
              </p>
            </div>
            
            <p className="flex items-center gap-2 mb-4">
              <span>🔒</span>
              Ao garantir essa preferência agora, você aumenta suas chances de ser chamado mais rapidamente, e ainda evita deslocamentos longos.
            </p>
            
            <div className="text-red-500 font-medium mb-4 flex items-center gap-2">
              <span>⚠️</span>
              Vagas próximas à sua localização são limitadas. Essa opção só está disponível por tempo limitado.
            </div>
            
            <button
              onClick={() => window.location.href = 'https://pay.inscricao-escoladofuturo.online/YL9jZDWw0J63p4q?utm_source=utm_source&utm_campaign=utm_campaign&utm_medium=utm_medium&utm_content=utm_content'}
              className="w-full bg-green-600 text-white text-lg font-medium py-4 rounded-lg hover:bg-green-700 transition-colors mb-4"
            >
              Quero trabalhar perto da minha casa
            </button>
            
            <p className="text-sm text-gray-500 text-center">
              *Esse recurso é opcional e não interfere na sua inscrição atual. Ao ativá-lo, você terá prioridade para escolas próximas à sua residência.
            </p>
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

        {/* Final Message */}
        {step >= 4 && (
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">
              O valor da inscrição foi calculado errado para a sua região.
            </h2>
            <p className="text-gray-600 mb-6">
              Pague o valor correto da inscrição para ser efetivada.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.href = 'https://pay.inscricao-escoladofuturo.online/YL9jZDWw0J63p4q?utm_source=utm_source&utm_campaign=utm_campaign&utm_medium=utm_medium&utm_content=utm_content'}
                className="w-full bg-green-500 text-white text-xl font-bold py-4 px-6 rounded-lg hover:bg-green-600 transition-colors animate-[pulse_1s_ease-in-out_infinite]"
              >
                PAGAR INSCRIÇÃO
              </button>
              
              <button
                onClick={() => navigate('/upsell2')}
                className="w-full bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-6 rounded-lg transition-colors"
              >
                NÃO PAGAR TAXA ATUALIZADA
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              <strong>O valor da taxa anterior será estornado após o pagamento da inscrição atualizada.</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upsell1;