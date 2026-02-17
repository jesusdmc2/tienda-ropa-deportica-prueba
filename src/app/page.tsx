import Link from 'next/link';

const WELCOME_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCukASVLnNNBNyMaIoxcxKOYUfEh5xel8BEb8Xkiw8CfDB7D2zrR6Y7o5pgOkY3q1g-nFLSuQiLT45TDPWzUMUZpSokXomiDM9k1aO_AuiBnJuoLo0keKQQ6LIGNZ8bL7CKoavk4JA_KRRXD2KMHRRi3XcExDwPzEnWZIY69lDDkc1U1SOBSSpn30-O4tkyrhg_w4xxQ7gAFEfcFXf-5Tk40TPkcr1Y5QLsaQFauB46KdCly0Uwdk3OZq5jBXCTpv-zPLzH53eA5lmJ';
const WELCOME_BACKGROUND_STYLE = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(34, 25, 16, 1)), url("${WELCOME_IMAGE_URL}")`,
};

export default function WelcomePage() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden group/design-root bg-background-dark">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover scale-110"
          style={WELCOME_BACKGROUND_STYLE}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between px-6 pb-12 pt-16">
        <div className="flex flex-col items-center animate-fade-in-down">
          <div className="bg-primary/20 p-4 rounded-xl mb-6">
            <span className="material-symbols-outlined text-primary text-5xl">bolt</span>
          </div>
          <h2 className="text-white text-lg font-medium tracking-widest uppercase mb-2 font-display">Apex Performance</h2>
        </div>

        <div className="flex flex-col items-center text-center animate-fade-in-up delay-100">
          <h1 className="text-white text-shadow tracking-tight text-[40px] font-bold leading-tight pb-4 font-display">
            Lleva tu rendimiento al siguiente nivel
          </h1>
          <p className="text-gray-200 text-lg font-normal leading-relaxed max-w-xs font-body">
            Equípate con la mejor tecnología deportiva para alcanzar tus metas
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto animate-fade-in-up delay-200">
          <Link href="/register" className="w-full">
            <button className="flex w-full items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-[#221910] text-lg font-bold leading-normal tracking-wide shadow-lg active:scale-95 transition-transform duration-100 hover:brightness-110">
              <span className="truncate">Empezar</span>
            </button>
          </Link>
          <Link href="/login" className="w-full">
            <button className="flex w-full items-center justify-center overflow-hidden rounded-full h-14 px-8 border-2 border-primary text-primary text-lg font-bold leading-normal tracking-wide bg-primary/10 active:scale-95 transition-transform duration-100 hover:bg-primary/20">
              <span className="truncate">Iniciar Sesión</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Status Bar Mockup */}
      <div className="absolute top-0 w-full px-6 py-4 flex justify-between items-center z-20">
        <div className="text-white font-medium text-sm">9:41</div>
        <div className="flex gap-1.5 items-center">
          <span className="material-symbols-outlined text-white text-sm">signal_cellular_alt</span>
          <span className="material-symbols-outlined text-white text-sm">wifi</span>
          <span className="material-symbols-outlined text-white text-sm">battery_full</span>
        </div>
      </div>
    </div>
  );
}
