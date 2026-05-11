document.write(`
    <footer class="bg-slate-900 text-slate-400 py-8 text-center mt-auto">
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
        
            .whatsapp-float img {
                width: 60%;
                height: auto;
            }
            @keyframes bounce-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-30px); }
            }
            .animate-bounce-slow { animation: bounce-slow 2s infinite; }
        </style>
        
        <a href="https://chat.whatsapp.com/FAvnlALKnq6CH7B6XWW1lf" aria-label="Junte-se à nossa comunidade no WhatsApp" class="fixed bottom-6 right-6 bg-[#25d366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1ebea5] transition-all z-[9999] animate-bounce-slow" target="_blank" rel="noopener noreferrer" title="Entrar na Comunidade">
            <i class="fa-brands fa-whatsapp text-3xl" aria-hidden="true"></i>
        </a>
        <p class="text-sm">Em desenvolvimento pela Comissão de Aprovados - CAALEMS</p>
        <p class="text-xs mt-2">Em defesa do provimento efetivo no serviço público.</p>
    </footer>
`);
document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');

    // Verifica se o botão existe na página atual antes de tentar adicionar a ação
    if (themeToggleBtn && themeToggleIcon) {
        
        // Define o ícone inicial correto ao carregar a página
        if (document.documentElement.classList.contains('dark')) {
            themeToggleIcon.classList.remove('fa-moon');
            themeToggleIcon.classList.add('fa-sun');
        }

        // Adiciona a função de clique no botão
        themeToggleBtn.addEventListener('click', function() {
            // Alterna a classe dark no HTML principal
            document.documentElement.classList.toggle('dark');
            // Atualiza gráficos se houver (para a página de Indicadores)
            if (typeof updateChartColors === "function") updateChartColors();
            
            // Troca o ícone e salva a preferência no LocalStorage
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
                themeToggleIcon.classList.remove('fa-moon');
                themeToggleIcon.classList.add('fa-sun');
            } else {
                localStorage.theme = 'light';
                themeToggleIcon.classList.remove('fa-sun');
                themeToggleIcon.classList.add('fa-moon');
            }
        });
    }
});
