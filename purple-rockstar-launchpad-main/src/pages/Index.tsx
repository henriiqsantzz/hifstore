
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [showCTAButton, setShowCTAButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTAButton(true);
    }, 420000); // 7 minutos em milissegundos

    return () => clearTimeout(timer);
  }, []);

  const handleCTAClick = () => {
    window.open('https://app.nivopayoficial.com.br/checkout/6ff74086-3e25-4282-a84b-ecee241d99d9', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 font-inter">
      {/* Header */}
      <div className="bg-primary text-white py-6 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto pl-4 md:pl-0">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
              Veja o vídeo até o final e remova qualquer ban do FiveM usando este programa
            </h1>
            <p className="text-sm md:text-base opacity-90 mt-2">Método Exclusivo e Comprovado</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        
        {/* Seção 1 - Mensagem inicial com VSL */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="bg-gradient-to-br from-purple-900 to-purple-950 rounded-2xl shadow-lg p-6 md:p-8 mb-8 border-2 border-purple-800">
            <h2 className="text-2xl md:text-4xl font-bold text-purple-100 mb-6 leading-tight">
              🎬 Assista ao vídeo até o final para fazer o download
            </h2>
            
            {/* VSL Container */}
            <div className="relative bg-purple-950 rounded-xl overflow-hidden shadow-2xl mb-6 border-4 border-purple-700">
              <div className="aspect-video relative">
                <iframe
                  src="https://scripts.converteai.net/e25befdb-22aa-48d2-b119-7ea3daf9509d/players/65a8a9bea331da0009b1d1c4/embed.html"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Método Desbloqueio FiveM"
                ></iframe>
              </div>
            </div>

            <p className="text-purple-200 text-lg font-medium">
              Descubra o método que já ajudou <span className="font-semibold text-purple-100">milhares de jogadores</span> a recuperarem suas contas
            </p>
          </div>
        </div>

        {/* Seção 2 - Call to Action com apenas variações de roxo */}
        {showCTAButton && (
          <div className="text-center animate-fade-in mb-12">
            <div className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-2xl p-8 shadow-2xl">
              <div 
                onClick={handleCTAClick}
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 rounded-xl p-6 shadow-lg animate-pulse-glow">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Play className="text-white w-8 h-8" fill="currentColor" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Clique aqui pra tirar seu Ban
                    </h3>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-purple-200 rounded-full animate-pulse"></span>
                      <span className="font-medium">Acesso Imediato</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 bg-white rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-purple-300 rounded-full animate-pulse"></span>
                      <span className="font-medium">100% Seguro</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 bg-white rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-purple-100 rounded-full animate-pulse"></span>
                      <span className="font-medium">Suporte Garantido</span>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-white opacity-90">
                    👆 Clique na área acima para continuar
                  </div>
                </div>
              </div>

              <div className="mt-6 text-white text-center">
                <p className="text-lg font-semibold mb-2">⚡ Oferta por tempo limitado</p>
                <p className="text-sm opacity-90">Não perca a chance de recuperar sua conta hoje mesmo</p>
              </div>
            </div>
          </div>
        )}

        {/* Seção 3 - Benefícios do Programa */}
        <div className="text-center animate-fade-in mb-12">
          <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl shadow-lg p-8 border-2 border-purple-600">
            {/* Título principal */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-100 mb-4 leading-tight">
              Único programa que funciona 100% — NVIDIA & AMD
            </h2>
            
            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-purple-200 mb-12 font-medium">
              Veja os benefícios do programa
            </p>

            {/* Três benefícios com imagens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              
              {/* Primeiro benefício */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg border-4 border-blue-400">
                  <img 
                    src="/lovable-uploads/9ee1e229-7eda-48b4-bb12-846d15a7b423.png" 
                    alt="FiveM Logo" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="text-purple-100">
                  <p className="font-semibold text-lg mb-2">Funciona pra toda cidade</p>
                  <p className="text-sm text-purple-200">Desban HWID em qualquer servidor FiveM</p>
                </div>
              </div>

              {/* Segundo benefício */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 shadow-lg border-4 border-green-400">
                  <img 
                    src="/lovable-uploads/9ee1e229-7eda-48b4-bb12-846d15a7b423.png" 
                    alt="FiveM Logo" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="text-purple-100">
                  <p className="font-semibold text-lg mb-2">FiveM Global Unban</p>
                  <p className="text-sm text-purple-200">Remove ban global com alguns cliques no programa</p>
                </div>
              </div>

              {/* Terceiro benefício */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-lg border-4 border-red-400">
                  <img 
                    src="/lovable-uploads/9ee1e229-7eda-48b4-bb12-846d15a7b423.png" 
                    alt="FiveM Logo" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="text-purple-100">
                  <p className="font-semibold text-lg mb-2">Anti Future Bans</p>
                  <p className="text-sm text-purple-200">Bloqueamos bans futuros — para quem usa mod menu, a chance de ban é reduzida em 95%</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Rodapé com credibilidade */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-purple-200 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Método Comprovado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span>Suporte 24h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
