import React from 'react';
import useUtmNavigator from '../hooks/useUtmNavigator';

const Upsell2: React.FC = () => {
  const navigate = useUtmNavigator();

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="space-y-6">
        <h1 className="text-[#071D41] text-3xl font-bold text-center">
          NÃO FECHE A PÁGINA AINDA...
        </h1>
        
        <div className="text-1.5xl space-y-6">
          <p>
            Você está a um passo de <span className="font-bold">garantir sua preparação</span> mesmo com orçamento limitado.
          </p>
          
          <p>
            Se não pode investir no curso completo agora, este <span className="font-bold">Guia Rápido de Estudos</span> foi criado para você não perder essa oportunidade - com o essencial para não ser eliminado na prova.
          </p>
        </div>

        <div className="relative">
          <div className="relative w-full">
            <img 
              src="https://s2-g1.glbimg.com/qTqed392ScDSRZl0zPtnTYDZ1Ic=/0x0:1920x1080/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/9/r/KmreXPQZC1s20mFuvkgg/rbs-noticias-rbsn-limpo-2804-frame-48232.png"
              alt="Estudante analisando material"
              className="w-full rounded-lg"
            />
            <div className="absolute top-6 left-6 bg-black/80 text-white px-6 py-3 rounded-lg">
              <p className="text-2xl font-bold">GUIA DE APROVAÇÃO</p>
              <p className="text-xl">FOCO NOS 80% ESSENCIAIS!</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#071D41]">
          <p className="font-semibold text-lg">
            Este guia contém <span className="text-[#071D41] font-bold">o mínimo que você precisa saber</span> para não ser reprovado:
          </p>
          <ul className="mt-4 space-y-3 pl-4">
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>Os <strong>temas que mais caem</strong> na prova (priorize esses!)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span><strong>Cronograma de 15 dias</strong> para quem tem pouco tempo</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span><strong>Erros eliminatórios</strong> que 80% cometem</span>
            </li>
          </ul>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">
            LEVE ESTE GUIA PRÁTICO
            <br />POR APENAS <span className="text-[#071D41]">R$19,00!</span>
          </h2>

          <div className="space-y-4 pt-6">
            <button 
               onClick={() => window.location.href = 'https://pay.inscricao-escoladofuturo.online/DYp0ZxVyVXQgmvX?utm_source=utm_source&utm_campaign=utm_campaign&utm_medium=utm_medium&utm_content=utm_content'}
              className="w-full bg-[#071D41] hover:bg-[#0A245E] text-white text-2xl font-bold py-6 px-8 rounded-xl transition-colors"
            >
              SIM, QUERO ME PREPARAR AGORA!
            </button>
            
            <button 
              onClick={() => navigate('/upsell3')}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white text-xl font-bold py-4 px-8 rounded-xl transition-colors"
            >
              NÃO, PREFERO CORRER O RISCO
            </button>
          </div>

          <div className="pt-4 text-sm text-gray-600">
            <p>7 dias de garantia | Acesso imediato</p>
            <p>Investimento único | Sem mensalidades</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upsell2;