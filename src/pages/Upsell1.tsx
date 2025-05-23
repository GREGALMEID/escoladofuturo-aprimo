import React from 'react';
import useUtmNavigator from '../hooks/useUtmNavigator';

const Upsell3: React.FC = () => {
  const navigate = useUtmNavigator();

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl bg-white rounded-lg shadow-lg">
      {/* Cabeçalho Impactante */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1F4E79] mb-4">
          <span className="block">DOBRE SEU SALÁRIO</span>
          <span className="text-[#06e006]">NO PROGRAMA ESCOLA DO FUTURO!</span>
        </h1>
        <div className="w-20 h-1 bg-[#1F4E79] mx-auto"></div>
      </div>

      {/* Texto substituindo o vídeo */}
      <div className="bg-[#F1F9FF] text-[#1F4E79] p-6 rounded-lg mb-6">
        <p className="text-lg mb-4 font-semibold">Você já garantiu sua vaga no programa geral, e agora tem uma OPORTUNIDADE ÚNICA:</p>
        <p className="mb-4">
          Muitos dos nossos agentes começaram exatamente como você — com um emprego simples, sem saber por onde crescer.
        </p>
        <p className="mb-4 font-bold">
          Mas aqueles que deram o próximo passo e adquiriram o <u>Pacote Carreira Acelerada</u> conseguiram dobrar o salário em até 6 meses.
        </p>
        <p className="mb-4">
          Com relatórios prontos, estratégias para impressionar seus superiores, e segredos de progressão interna, você se torna o destaque da escola em pouco tempo.
        </p>
        <p className="mb-4">
          E o melhor: <strong>isso funciona mesmo se você tiver pouco tempo ou nunca foi promovido antes.</strong>
        </p>
        <p className="text-xl font-bold text-[#E74C3C]">Essa é sua única chance de garantir esse pacote por apenas R$27.</p>
      </div>

      {/* Benefícios */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1F4E79] mb-4 text-center">
          COM ESTE PACOTE EXCLUSIVO VOCÊ VAI:
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="bg-[#1F4E79] text-white rounded-full p-1 mt-1 flex-shrink-0">
              ✓
            </div>
            <span><strong>Dobrar seu salário</strong> em 6 meses com progressão de carreira</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-[#1F4E79] text-white rounded-full p-1 mt-1 flex-shrink-0">
              ✓
            </div>
            <span><strong>Segredos</strong> para diminuir sua carga horária em 30%</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-[#1F4E79] text-white rounded-full p-1 mt-1 flex-shrink-0">
              ✓
            </div>
            <span><strong>Modelos prontos</strong> de relatórios para impressionar supervisores</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-[#1F4E79] text-white rounded-full p-1 mt-1 flex-shrink-0">
              ✓
            </div>
            <span><strong>Acesso vitalício</strong> à comunidade dos top 5% agentes escola do futuro</span>
          </li>
        </ul>
      </div>

      {/* Depoimento */}
      <div className="bg-[#F9F9F9] p-6 rounded-lg mb-8 border-l-4 border-[#E74C3C]">
        <p className="italic mb-2">"Comprei este método e em 8 meses fui promovido a coordenador regional sem estudos. Meu salário saltou de R$3.800 para R$7.200! Usei exatamente os modelos de relatório e estratégias do curso."</p>
        <p className="font-bold">- Luzia M., São Paulo</p>
      </div>

      {/* Oferta */}
      <div className="text-center bg-[#1F4E79] rounded-lg p-6 text-white mb-6">
        <p className="text-sm uppercase mb-1">oferta exclusiva para inscritos</p>
        <h2 className="text-3xl font-bold mb-2">PACOTE CARREIRA ACELERADA</h2>
        <p className="text-2xl font-extrabold mb-2">R$27,00</p>
        <p className="text-sm">A vista no Pix.</p>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <button 
           onClick={() => window.location.href = 'https://pay.inscricao-escoladofuturo.online/z0qn35dvjeVg98m?utm_source=utm_source&utm_campaign=utm_campaign&utm_medium=utm_medium&utm_content=utm_content'}
          className="w-full bg-[#06e006] hover:bg-[#06e006] text-white text-xl font-bold py-4 px-6 rounded-lg shadow-lg transition-all transform hover:scale-[1.02]"
        >
          QUERO DOBRAR MEU SALÁRIO!
        </button>
        
        <button 
          onClick={() => navigate('/upsell2')}
          className="text-sm text-gray-600 hover:text-gray-800 underline mx-auto block text-center"
        >
          Não quero crescer na carreira
        </button>
        
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>7 dias de garantia | Acesso imediato</span>
        </div>
      </div>
    </div>
  );
};

export default Upsell3;
