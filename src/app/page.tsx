import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play} from 'lucide-react'

export default function Home() {
  return (
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <aside className="w-72 bg-zinc-950 p-6">
            
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"/>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
              <div className="w-3 h-3 bg-green-500 rounded-full"/>
            </div>

            <nav className="space-y-5 mt-10">
              <a href="" className="flex items-center gap-2 text-sm font-semibold hover:text-white/60">
                <HomeIcon/>
                Home
              </a>
              <a href="" className="flex items-center gap-2 text-sm font-semibold hover:text-white/60">
                <Search/>
                Search
              </a>
              <a href="" className="flex items-center gap-2 text-sm font-semibold hover:text-white/60">
                <Library/>
                Your Library
              </a>
            </nav>

            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
               <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Player One</a>
               <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">ANOS 2000</a>  
               <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">2K23</a> 
               <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Só leveza</a> 
               <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Bruna + Rafael</a> 
               <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Sertanejo para Brubru</a> 
               <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Domingao</a> 
               <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">POP UP</a> 
               <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">MPB</a> 
            </nav>
          </aside>
          <main className="flex-1 p-6">
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-1">
                <ChevronLeft/>
              </button>
              <button className="rounded-full bg-black/40 p-1">
                <ChevronRight/>
              </button>
            </div>

            <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors">
                <img src="/album1.jpg" width={104} height={104} alt="Capa do álbum Stoney do cantor Post Malone" />
                <strong>Stoney</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play/>
                </button>
              </a>
             
              <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors">
                <img src="/album1.jpg" width={104} height={104} alt="Capa do álbum Stoney do cantor Post Malone" />
                <strong>Stoney</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play/>
                </button>
              </a>
              
              <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors"> 
                <img src="/album1.jpg" width={104} height={104} alt="Capa do álbum Stoney do cantor Post Malone" />
                <strong>Stoney</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play/>
                </button>
              </a>
             
              <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors">
                <img src="/album1.jpg" width={104} height={104} alt="Capa do álbum Stoney do cantor Post Malone" />
                <strong>Stoney</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play/>
                </button>
              </a>
             
              <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors">
                <img src="/album1.jpg" width={104} height={104} alt="Capa do álbum Stoney do cantor Post Malone" />
                <strong>Stoney</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play/>
                </button>
              </a>
              
              <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors">
                <img src="/album1.jpg" width={104} height={104} alt="Capa do álbum Stoney do cantor Post Malone" />
                <strong>Stoney</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play/>
                </button>
              </a>
            </div>
          </main>    
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
          footer
        </footer>
      </div>
  )
}
