// Injeção do Cabeçalho Padrão
document.write(`
    <nav class="bg-institucional-900 text-white shadow-lg sticky top-0 z-[100] w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                
                <div class="flex items-center gap-3">
                    <a href="index.html"><img src="logo.png" alt="Logo CAALEMS" class="h-10 md:h-12 w-auto"></a>
                    <span class="font-bold text-base md:text-lg tracking-wide xs:block">Comissão ALEMS</span>
                </div>

                <div class="flex items-center gap-2 md:gap-4">
                    <button id="theme-toggle" aria-label="Alternar tema" class="text-gray-300 hover:text-white p-2 focus:outline-none transition-colors">
                        <i id="theme-toggle-icon" class="fa-solid fa-moon text-xl"></i>
                    </button>
                    
                    <div class="md:hidden">
                        <button onclick="document.getElementById('nav-menu').classList.toggle('hidden')" aria-label="Abrir menu" class="text-gray-300 hover:text-white p-2 focus:outline-none">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>

                <div id="nav-menu" class="hidden md:block absolute top-16 left-0 w-full bg-institucional-900 shadow-xl md:static md:w-auto md:bg-transparent md:shadow-none">
                    <div class="flex flex-col md:flex-row p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-1 lg:space-x-2 border-t border-institucional-800 md:border-t-0" id="nav-links">
                        <a href="index.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-institucional-800"><i class="fa-solid fa-house mr-2"></i>Início</a>
                        <a href="quemsomos.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-institucional-800"><i class="fa-solid fa-users mr-2"></i>Quem Somos</a>
                        <a href="lei6279.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-institucional-800"><i class="fa-solid fa-book-open mr-2"></i>Lei 6.279</a>
                        <a href="planilha.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-institucional-800"><i class="fa-solid fa-list-ol mr-2"></i>Lista de Aprovados</a>
                        <a href="ocupacao.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-institucional-800"><i class="fa-solid fa-users-viewfinder mr-2"></i>Ocupação</a>
                        <a href="publicacoes.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-institucional-800"><i class="fa-solid fa-file-lines mr-2"></i>Publicações</a>
                        <a href="calculadora.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-institucional-800"><i class="fa-solid fa-calculator mr-2"></i>Calculadora</a>
                        <a href="contato.html" class="nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-institucional-800"><i class="fa-solid fa-envelope mr-2"></i>Contato</a>
                    </div>
                </div>

            </div>
        </div>
    </nav>
`);

// Lógica para destacar o link ativo
(function() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('bg-institucional-800', 'text-white');
            link.classList.remove('text-gray-300');
        } else {
            link.classList.add('text-gray-300');
        }
    });
})();
