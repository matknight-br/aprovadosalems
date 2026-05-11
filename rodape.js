document.write(`
    <footer class="bg-slate-900 text-slate-400 py-8 text-center mt-auto">
        <p class="text-sm">Em desenvolvimento pela Comissão de Aprovados - CAALEMS</p>
        <p class="text-xs mt-2">Em defesa do provimento efetivo no serviço público.</p>
        <script>
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeToggleIcon = document.getElementById('theme-toggle-icon');
    
            // Define o ícone inicial correto
            if (document.documentElement.classList.contains('dark')) {
                themeToggleIcon.classList.remove('fa-moon');
                themeToggleIcon.classList.add('fa-sun');
            }
    
            themeToggleBtn.addEventListener('click', function() {
                // Alterna a classe dark no HTML
                document.documentElement.classList.toggle('dark');
                
                // Troca o ícone e salva no LocalStorage
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
        </script>
    </footer>
`);
