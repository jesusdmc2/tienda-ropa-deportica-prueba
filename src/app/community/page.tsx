import Link from 'next/link';
import { BottomNav } from '@/components/ui/BottomNav';

export default function CommunityPage() {
  const navItems = [
    { icon: 'home', label: 'Inicio', href: '/home' },
    { icon: 'shopping_bag', label: 'Tienda', href: '/categories' },
    { icon: 'groups', label: 'Comunidad', href: '/community', active: true, filled: true },
    { icon: 'person', label: 'Perfil', href: '/profile' },
  ];

  return (
    <div className="bg-background-dark font-display text-gray-900 dark:text-white overflow-x-hidden antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col pb-safe">
      <div className="relative flex min-h-screen w-full flex-col pb-24 mx-auto max-w-md bg-background-dark border-x border-white/5">
        {/* Header */}
        <div className="sticky top-0 z-40 flex items-center justify-between bg-background-dark/95 backdrop-blur-md px-4 py-3 border-b border-white/5">
          <h2 className="text-xl font-extrabold tracking-tight text-white flex-1">Comunidad Apex</h2>
          <div className="flex items-center gap-3">
            <button className="relative flex items-center justify-center text-white hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[28px]">notifications</span>
              <span className="absolute top-0 right-0 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary ring-2 ring-background-dark"></span>
            </button>
          </div>
        </div>

        {/* Stories / Highlights */}
        <div className="w-full overflow-x-auto no-scrollbar py-4 pl-4 bg-background-dark border-b border-white/5">
          <div className="flex gap-4 pr-4">
            <div className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group">
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-primary via-orange-400 to-yellow-400 group-hover:scale-105 transition-transform">
                <div className="h-16 w-16 rounded-full border-[3px] border-background-dark bg-gray-800 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABiCwcnzVUu4JfiGwmRf8x4UDIVFwzJGARqLc6jjhUybqgW4ULKwX4tMC2EIk4wDL7HAvNAPeFX2tbEPxbYGnx8BPeCPEEFZR6seUpMyZD1NrjihKeKL6APJMSEpRgUjblJLcKoMnP-WsAoBhJ3u2-99bPvK4P0FbEG7OOz23PNUPrlK_MaeWP2OYYBjhZ5Fs83i9OFrtnBzIgOe7E01G3nKHEvYLfrjRhfUriLPigVGB2c_YVqg_yJWXM3dGGUEiyzUBFnbSSa_xL")' }}></div>
              </div>
              <span className="text-xs font-medium text-white">Destacados</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group">
              <div className="p-[2px] rounded-full bg-gray-700 group-hover:bg-gray-600 transition-colors">
                <div className="h-16 w-16 rounded-full border-[3px] border-background-dark bg-gray-800 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLI6AmmQ6Swg0eV6n7ha158AL0os5528EzXKVueIvG_hZWHABkQKFFvEUW3s6ufv71LNLN3M6YF61RVc1NPtjApEGuzUR2E_d82CZ1eZWXmjgFfVbrhOQAfoeiAVbIdGejnHu34LOZguwp4WKCF_cUX_k9NBMqHV5PJVXwkY53nEgL5VbDDza6kWTqBpJWehhZOLdZxvvboFFo4A42un3NGP2qCyUuhOL4gtcH370onnbcxHpm323FT1RQhP6h6qcT6fFcPuvRtJz3")' }}></div>
              </div>
              <span className="text-xs font-medium text-gray-400">Novedades</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group">
              <div className="p-[2px] rounded-full bg-gray-700 group-hover:bg-gray-600 transition-colors">
                <div className="h-16 w-16 rounded-full border-[3px] border-background-dark bg-gray-800 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgmawPRCvF_nrFHOzTvQsaCIkS81j_drTJvgPWIT9v1YPhGFaz7PrYW7gKHY7uGD6hdc3VRrXS6kVF7oL7956BEBrWpgGhAHnu_IOztHdrnbYkFZI5vw_a1jvrt3_KbfrlLV50ZM7_R5czw-D9GCcKZhxZXHTnMwaWKJbmAiwu5Jvly9E3TGHfCt2V5ttvQUh4FzOpi64bAsQuYaWJFIf_Gkt3PbcmN1icPhAqdTsS3lZ9kK9v43KzA0K7pPN01_fm6Xbrkl5QvKCh")' }}></div>
              </div>
              <span className="text-xs font-medium text-gray-400">Retos</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group">
              <div className="p-[2px] rounded-full bg-gray-700 group-hover:bg-gray-600 transition-colors">
                <div className="h-16 w-16 rounded-full border-[3px] border-background-dark bg-gray-800 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd4570u0mqJ-5plvJov_2j9rNYcTrp9fym-hu4286aKfAnnDAsCc38AkaSPT6SUvNcJ58hreH2cV4Zo43NNEXREdZB9Ip_77ecMPqKqkRsbPSWbuecTh_CSbIHuAKSfIQLp8DHep_Sn2phXphhPfVwmnPzeGjsXwnDDqvtGHPGCfWIxt_qhtkHKiBtKLxfvejYZ7bB14WxAU-QIoD6ycNSeCJ0SQYnPY5md65umHg6ntamsiP2LnOoGeNtU4f6WUu5ZQnfl1MuCmJk")' }}></div>
              </div>
              <span className="text-xs font-medium text-gray-400">Eventos</span>
            </div>
          </div>
        </div>

        {/* Feed List */}
        <div className="flex flex-col gap-6 pt-2">
          {/* Post 1 */}
          <div className="flex flex-col border-b border-white/5 pb-4">
            {/* User Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-700 bg-center bg-cover ring-2 ring-white/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDm5EACrqhnTz20K64Nzf2ACa4q_JIv3DUpmYnS3MBIHW0-uZvpCXpgJ2uZ2O9rz6c0V8URRM6_J9ocjq02a3eJmhdctzFIRWml1k1ZAHCOG9WcyWh3gK7ceMg-EugmmUHtlw_OsQU_Tu-JhB1goC1BdLbno9HFgyH1FxWXxbk07W-tXd6_PQTksK5jC8lkNMV-mPnCOqOSnimlwL6AzAyFhq3IT3fpWKyeL6P9wXGoHcXyumJoTLUz-8QcWwVu8j1WbapVb0p2Chvj")' }}></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white leading-none">Sofiafit_99</span>
                  <span className="text-xs text-gray-400 mt-1">Hace 2 horas</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
            {/* Image */}
            <div className="w-full bg-surface-dark aspect-[4/5] relative group">
              <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcvvRHpIFKrslMCKYkOstvD5WlATlgKMYBMAtILHHJkrVExTiJCodoU46kFhnes561Yn8MHusKITveUZA3w_t2tU95ZeiHCvakWhStP5kJOgNHYfDofJ8PUTtV1Pe6cLliSMheQ25nTjX67pzUMnr16G7Vrp4PQ6lgNyEISPrHDCh-bDnEWE9vVh54lUD4fBeD6_jeLe9ok7pXvmxNfyt72wagLeShPygMQA65olBY11TeaMdeRDyNxSjjZsEpEzP_F6e-td1AdqWw")' }}></div>
              {/* Product Tag Overlay */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10 shadow-lg cursor-pointer hover:bg-black/80 transition-colors">
                <span className="material-symbols-outlined text-primary text-sm">shopping_bag</span>
                <span className="text-xs font-semibold text-white">Leggings Apex Pro</span>
              </div>
            </div>
            {/* Actions */}
            <div className="flex items-center justify-between px-4 pt-3">
              <div className="flex items-center gap-4">
                <button className="group flex items-center gap-1 text-white">
                  <span className="material-symbols-outlined group-hover:text-red-500 transition-colors text-[26px]">favorite</span>
                </button>
                <button className="group flex items-center gap-1 text-white">
                  <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[26px]">chat_bubble</span>
                </button>
                <button className="group flex items-center gap-1 text-white">
                  <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[26px] -rotate-45 mb-1">send</span>
                </button>
              </div>
              <div>
                <span className="material-symbols-outlined text-white hover:text-primary cursor-pointer text-[26px]">bookmark</span>
              </div>
            </div>
            {/* Likes count */}
            <div className="px-4 py-1">
              <p className="text-sm font-bold text-white">458 Me gusta</p>
            </div>
            {/* Rating & Review */}
            <div className="px-4 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="flex text-neon-green">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <span className="text-xs font-bold text-neon-green bg-neon-green/10 px-2 py-0.5 rounded">EXCELENTE</span>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed mt-1">
                <span className="font-bold text-white">Sofiafit_99</span> ¡Increíble calidad! Los leggings no se bajan al correr y la tela es súper transpirable. Definitivamente mis favoritos para el día de pierna. 🍑🔥 <span className="text-gray-400">... más</span>
              </p>
              <p className="text-xs text-gray-500 mt-1 cursor-pointer hover:text-white">Ver los 23 comentarios</p>
            </div>
          </div>

          {/* Post 2 */}
          <div className="flex flex-col border-b border-white/5 pb-4">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-700 bg-center bg-cover ring-2 ring-white/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNOg41rhkP00A88br3FiLVwLdfRUQ-DLHCSkQoWOROz2iAQQoYvzIEl1hegTDWL7tLfi31fRHV_cATkYxUycwTswzkQmvDGA8RsG1jFpVoZQ7mFzgH-MxFu8vs0mMuuvzaSLJ36p1Q4G1ATs1R1IK5vM9rCq-SMvXCGtQErGhXh7R0yfwKJsnw7z63HnNue2oKL7uUqB1gQGLGNWrbB-SAgVsY1SB_CIQwztjmALIEU0vwvR08Sgl82fabXK5yoeKa9fuXlnCargfR")' }}></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white leading-none">CarlosRunner</span>
                  <span className="text-xs text-gray-400 mt-1">Hace 5 horas</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
            <div className="w-full bg-surface-dark aspect-[4/5] relative">
              <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrPVmDBf_hn9jItfBMzicbKlBLk5VRCpR1M5scJBxt3ifmxAcuftIbThmbffIVA2whsuzXFvsuwc5SOBLg2MzxC7uEE5PZCKMoSRFxGTY7CPExHW7BAjYE1IbM6nigmJeZFYcOGzhzIO5zvNQWTgaeXLruifn8tEJtHmkrQaJcEsahzLpPY4x_vSia9dFH3_ihuJgUpvifSuiEV7LiEXd749qlhLervJZUMkI1XvaCdqJLdfe8LfQPTb6N-wgC4Sn7d1yHyku85-xZ")' }}></div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10 shadow-lg">
                <span className="material-symbols-outlined text-primary text-sm">shopping_bag</span>
                <span className="text-xs font-semibold text-white">Camiseta Tech Run</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 pt-3">
              <div className="flex items-center gap-4">
                <button className="group flex items-center gap-1 text-white">
                  <span className="material-symbols-outlined group-hover:text-red-500 transition-colors text-[26px]">favorite_border</span>
                </button>
                <button className="group flex items-center gap-1 text-white">
                  <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[26px]">chat_bubble</span>
                </button>
                <button className="group flex items-center gap-1 text-white">
                  <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[26px] -rotate-45 mb-1">send</span>
                </button>
              </div>
              <div>
                <span className="material-symbols-outlined text-white hover:text-primary cursor-pointer text-[26px]">bookmark_border</span>
              </div>
            </div>
            <div className="px-4 py-1">
              <p className="text-sm font-bold text-white">1,204 Me gusta</p>
            </div>
            <div className="px-4 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="flex text-neon-green">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                </div>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed mt-1">
                <span className="font-bold text-white">CarlosRunner</span> Probando el nuevo gear para el maratón nocturno. La reflectividad es brutal y se siente súper ligera. 🏃‍♂️💨 #ApexPerformance #NightRun
              </p>
              <p className="text-xs text-gray-500 mt-1 cursor-pointer hover:text-white">Ver los 89 comentarios</p>
            </div>
          </div>
        </div>

        {/* Floating Action Button (FAB) */}
        <button className="fixed z-40 bottom-24 right-4 bg-primary hover:bg-orange-600 text-white shadow-[0_8px_30px_rgb(242,127,13,0.4)] transition-all duration-300 transform active:scale-95 flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full border border-white/20">
          <span className="material-symbols-outlined text-[28px]">add_a_photo</span>
          <span className="font-bold tracking-wide text-sm">SUBIR FOTO</span>
        </button>
      </div>

      <BottomNav items={navItems} />
    </div>
  );
}
