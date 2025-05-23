import React from 'react';
import useUtmNavigator from '../hooks/useUtmNavigator';

const Upsell1: React.FC = () => {
  const navigate = useUtmNavigator();

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="space-y-6">
        <h1 className="text-[#071D41] text-2xl font-bold text-center">
         KIT DE APROVAÇÃO AVANÇADO
        </h1>
        
        <div className="text-1.5xl space-y-6">
          <p>
            Você está a um passo de <span className="font-bold">aumentar em 93% suas chances</span> de ser aprovado de primeira.
          </p>
          
          <p>
            Você chegou até aqui porque está decidido a mudar sua realidade – e agora tem a oportunidade de <span className="font-bold">acelerar seus resultados</span> com um curso direto ao ponto, criado para quem quer passar de primeira, sem enrolação, sem correr risco de reprovação.
          </p>
        </div>

        <div className="relative">
          <div className="relative w-full">
            <img 
              src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg"
              alt="Professor explicando"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 w-24 h-24 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[32px] border-l-white border-b-[20px] border-b-transparent ml-2"></div>
              </div>
            </div>
            <div className="absolute top-6 left-6 bg-black/80 text-white px-6 py-3 rounded-lg">
              <p className="text-2xl font-bold">SEGREDO DA SUA APROVAÇÃO</p>
              <p className="text-xl">3x MAIS CHANCE!</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
         <h2 className="text-2xl font-bold text-[#071D41]">
  🔓 LIBERE AGORA O ACESSO AO <span className="text-green-600">VÍDEO COMPLETO</span> QUE PODE <span className="underline">MUDAR SUA APROVAÇÃO</span>!
  <br />
  <span className="text-red-600">TUDO ISSO POR APENAS <span className="text-3xl font-extrabold">R$12,90</span></span>
</h2>
          <div className="space-y-4 pt-6">
            <button 
  onClick={() => window.location.href = 'https://pay.inscricao-escoladofuturo.online/YL9jZDWw0J63p4q?utm_source=utm_source&utm_campaign=utm_campaign&utm_medium=utm_medium&utm_content=utm_content'}
  className="w-full bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-6 px-8 rounded-xl transition-colors"
>
              SIM, QUERO SER APROVADO DE PRIMEIRA!
            </button>
            
            <button 
              onClick={() => navigate('/sucesso')}
              className="w-full bg-red-600 hover:bg-red-700 text-white text-1xl font-bold py-6 px-5 rounded-xl transition-colors"
            >
              NÃO, QUERO REPROVAR E PERDER MINHA VAGA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upsell1;