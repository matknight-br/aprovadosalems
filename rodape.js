document.write(`
    <footer class="bg-slate-900 text-slate-400 py-8 text-center mt-auto">
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
