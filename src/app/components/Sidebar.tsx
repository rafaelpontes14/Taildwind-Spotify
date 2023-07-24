import { HomeIcon, Search, Library } from "lucide-react"
export function Sidebar() {
    return (
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
    )
}