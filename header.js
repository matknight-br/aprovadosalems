document.write(`
<nav class="bg-institucional-900 text-white shadow-lg sticky top-0 z-[100] w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 w-full">
            
            <div class="flex-shrink-0 flex items-center gap-3">
                <a href="index.html"><img src="logo.png" alt="Logo CAALEMS" class="h-10 md:h-12 w-auto"></a>
                <span class="font-bold text-base md:text-lg tracking-wide hidden sm:block">Comissão ALEMS</span>
            </div>

            <div class="flex items-center justify-end flex-grow">
                
                <div id="nav-menu" class="hidden md:flex absolute top-16 left-0 w-full bg-institucional-900 shadow-xl md:static md:w-auto md:bg-transparent md:shadow-none transition-all duration-300">
                    <div class="flex flex-col md:flex-row p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-1 lg:space-x-2 border-t border-institucional-800 md:border-t-0 w-full md:w-auto" id="nav-links">
                        
                        <a href="index.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-institucional-800"><i class="fa-solid fa-house mr-2"></i>Início</a>
                        
                        <a href="quemsomos.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-institucional-800"><i class="fa-solid fa-users mr-2"></i>Quem Somos</a>
                        
                        <div class="relative group">
                            <button id="transparencia-btn" class="nav-item flex items-center justify-between w-full md:w-auto px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-institucional-800 focus:outline-none">
                                <span><i class="fa-solid fa-magnifying-glass-chart mr-2"></i>Transparência</span>
                                <i class="fa-solid fa-chevron-down ml-2 text-[10px] transition-transform duration-200" id="transparencia-icon"></i>
                            </button>
                            
                            <div id="transparencia-menu" class="hidden md:absolute md:top-full md:left-0 md:mt-1 md:w-48 bg-institucional-800 md:bg-white md:dark:bg-slate-800 md:shadow-lg rounded-md overflow-hidden flex-col pl-6 md:pl-0 md:border border-slate-200 dark:border-slate-700">
                                <a href="lei6279.html" class="block px-4 py-3 text-sm font-medium text-white md:text-slate-700 md:dark:text-slate-200 hover:bg-institucional-700 md:hover:bg-slate-100 md:dark:hover:bg-slate-700 transition-colors"><i class="fa-solid fa-book-open w-5 text-center mr-2 text-emerald-400 md:text-emerald-600"></i> Lei 6.279</a>
                                <a href="planilha.html" class="block px-4 py-3 text-sm font-medium text-white md:text-slate-700 md:dark:text-slate-200 hover:bg-institucional-700 md:hover:bg-slate-100 md:dark:hover:bg-slate-700 transition-colors"><i class="fa-solid fa-list-ol w-5 text-center mr-2 text-blue-400 md:text-blue-600"></i> Aprovados</a>
                                <a href="ocupacao.html" class="block px-4 py-3 text-sm font-medium text-white md:text-slate-700 md:dark:text-slate-200 hover:bg-institucional-700 md:hover:bg-slate-100 md:dark:hover:bg-slate-700 transition-colors"><i class="fa-solid fa-users-viewfinder w-5 text-center mr-2 text-amber-400 md:text-amber-600"></i> Ocupação Ativa</a>
                            </div>
                        </div>

                        <a href="publicacoes.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-institucional-800"><i class="fa-solid fa-file-lines mr-2"></i>Publicações</a>
                        
                        <a href="calculadora.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-institucional-800"><i class="fa-solid fa-calculator mr-2"></i>Calculadora</a>
                        
                        <a href="contato.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-institucional-800"><i class="fa-solid fa-envelope mr-2"></i>Contato</a>
                    </div>
                </div>

                <div class="flex items-center gap-2 ml-2 md:ml-4">
                    <button onclick="window.toggleTheme()" aria-label="Alternar tema" class="text-gray-300 hover:text-white p-2 focus:outline-none transition-colors">
                        <i id="theme-toggle-icon" class="fa-solid fa-moon text-xl"></i>
                    </button>
                    
                    <div class="md:hidden">
                        <button id="mobile-menu-btn" aria-label="Abrir menu" class="text-gray-300 hover:text-white p-2 focus:outline-none">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</nav>
`);

// ==========================================
// FUNÇÃO GLOBAL DE TEMA (À Prova de Falhas)
// ==========================================
window.toggleTheme = function() {
    const htmlElement = document.documentElement;
    const icon = document.getElementById('theme-toggle-icon');
    
    // Alterna a classe dark no HTML
    htmlElement.classList.toggle('dark');
    
    // Salva a preferência
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        if(icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    } else {
        localStorage.setItem('theme', 'light');
        if(icon) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
};

// ==========================================
// OUTROS SCRIPTS DE MENU
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Atualizar Ícone no carregamento
    const themeIcon = document.getElementById('theme-toggle-icon');
    if(themeIcon) {
        if (document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            // Garante que o HTML tenha a classe caso falhe
            document.documentElement.classList.add('dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            document.documentElement.classList.remove('dark');
        }
    }

    // 2. LÓGICA DO MENU MOBILE
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });
    }

    // 3. LÓGICA DO MENU SUSPENSO (DROPDOWN)
    const transBtn = document.getElementById('transparencia-btn');
    const transMenu = document.getElementById('transparencia-menu');
    const transIcon = document.getElementById('transparencia-icon');
    const group = document.querySelector('.group');
    
    if (transBtn && transMenu) {
        // Abrir ao clicar (Essencial para Mobile)
        transBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (transMenu.classList.contains('hidden')) {
                transMenu.classList.remove('hidden');
                transMenu.classList.add('flex');
                transIcon.classList.add('rotate-180');
            } else {
                transMenu.classList.add('hidden');
                transMenu.classList.remove('flex');
                transIcon.classList.remove('rotate-180');
            }
        });

        // Abrir ao passar o rato (Desktop)
        if (group) {
            group.addEventListener('mouseenter', () => {
                if (window.innerWidth >= 768) { 
                    transMenu.classList.remove('hidden');
                    transMenu.classList.add('flex');
                    transIcon.classList.add('rotate-180');
                }
            });
            group.addEventListener('mouseleave', () => {
                if (window.innerWidth >= 768) { 
                    transMenu.classList.add('hidden');
                    transMenu.classList.remove('flex');
                    transIcon.classList.remove('rotate-180');
                }
            });
        }

        // Fechar ao clicar fora do menu
        document.addEventListener('click', (e) => {
            if (!transMenu.classList.contains('hidden') && !e.target.closest('.group')) {
                transMenu.classList.add('hidden');
                transMenu.classList.remove('flex');
                transIcon.classList.remove('rotate-180');
            }
        });
    }
});