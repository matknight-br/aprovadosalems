// 1. INJEÇÃO DO RODAPÉ E DO BOTÃO FLUTUANTE DO WHATSAPP
document.write(`
    <style>
        .whatsapp-float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 20px;
            right: 20px;
            background-color: #25d366;
            color: #FFF;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
            z-index: 9999;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .whatsapp-float:hover {
            background-color: #1ebea5;
            box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.4);
            transform: scale(1.05);
        }
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
    </style>

    <a href="https://chat.whatsapp.com/FAvnlALKnq6CH7B6XWW1lf" aria-label="Junte-se à nossa comunidade no WhatsApp" class="whatsapp-float animate-bounce-slow" target="_blank" rel="noopener noreferrer" title="Entrar na Comunidade">
        <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </a>

    <footer class="bg-institucional-900 dark:bg-slate-950 text-white py-8 border-t border-institucional-800 dark:border-slate-800 transition-colors duration-300 mt-auto w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            <img src="logo.png" alt="CAALEMS" class="h-16 w-auto mb-4 opacity-80 hover:opacity-100 transition-opacity">
            
            <h3 class="text-lg font-bold tracking-wider mb-2">Comissão de Aprovados ALEMS</h3>
            
            <p class="text-sm text-slate-400 max-w-2xl mb-6">
                Em defesa do provimento efetivo no serviço público.
            </p>
            
            <div class="flex gap-6 mb-6">
                <a href="https://instagram.com/aprovadosalems" target="_blank" class="text-slate-400 hover:text-white transition-colors" title="Instagram" aria-label="Aceder ao nosso Instagram">
                    <i class="fa-brands fa-instagram text-2xl" aria-hidden="true"></i>
                </a>
                <a href="mailto:aprovadosalems@gmail.com" class="text-slate-400 hover:text-white transition-colors" title="E-mail" aria-label="Enviar um email">
                    <i class="fa-solid fa-envelope text-2xl" aria-hidden="true"></i>
                </a>
                <a href="https://aprovadosalems.dpdns.org" class="text-slate-400 hover:text-white transition-colors" title="Portal Web" aria-label="Página Inicial do nosso portal">
                    <i class="fa-solid fa-globe text-2xl" aria-hidden="true"></i>
                </a>
            </div>
            
            <p class="text-xs text-slate-500">
                &copy; ${new Date().getFullYear()} CAALEMS. Todos os direitos reservados.<br>
                Informações baseadas no Portal da Transparência e Diário Oficial.
            </p>
        </div>
    </footer>
`);

// 2. LÓGICA DO MODO ESCURO (A prova de falhas)
(function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');

    if (themeToggleBtn && themeToggleIcon) {
        
        // Define o ícone correto de início
        if (document.documentElement.classList.contains('dark')) {
            themeToggleIcon.classList.remove('fa-moon');
            themeToggleIcon.classList.add('fa-sun');
        }

        // Evento de clique
        themeToggleBtn.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
                themeToggleIcon.classList.remove('fa-moon');
                themeToggleIcon.classList.add('fa-sun');
            } else {
                localStorage.theme = 'light';
                themeToggleIcon.classList.remove('fa-sun');
                themeToggleIcon.classList.add('fa-moon');
            }
            
            // Atualiza o gráfico na página de indicadores, se existir
            if (typeof updateChartColors === "function") {
                updateChartColors();
            }
        });
    }
})();
