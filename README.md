📖 Sobre o Projeto
Este projeto consiste no site institucional da IEADBAM Tefé, desenvolvido para fornecer informações sobre a igreja, seus cultos, eventos e projetos sociais. O site foi criado com foco em usabilidade, acessibilidade e design responsivo.

✨ Funcionalidades Principais
🎯 Design Moderno e Responsivo

Layout adaptável para todos os dispositivos

Cores temáticas (Verde Amazônia e Dourado)

Interface intuitiva e acessível

📅 Calendário de Eventos Interativo

Visualização mensal de eventos

Navegação entre meses

Destaque para dias com eventos

Modal de detalhes dos eventos

Integração com WhatsApp para inscrições

🏠 Seções do Site

Home: Apresentação da igreja com hero section

Destaques: Projetos e atividades especiais

Cultos: Programação semanal de cultos

Eventos: Calendário interativo com todos os eventos

Contato: Informações de localização e contato

🔄 Modais Interativos

Ação Social com projetos detalhados

Santo Rolê (eventos para jovens)

Informações sobre Batismo

Galeria de fotos

🛠 Tecnologias Utilizadas
Frontend
HTML5: Estrutura semântica e acessível

CSS3:

Grid Layout e Flexbox

Variáveis CSS (Custom Properties)

Animações e transições

Design responsivo com Media Queries

JavaScript (ES6+):

Manipulação do DOM

Gestão de modais

Lógica do calendário interativo

Smooth scrolling

Bibliotecas e Recursos Externos
Google Fonts: Montserrat para tipografia

Font Awesome: Ícones vetoriais

CDNJS: Hospedagem de recursos

🚀 Como Executar o Projeto
Pré-requisitos
Navegador web moderno (Chrome, Firefox, Safari, Edge)

Servidor web local (opcional)

Instalação Local
Clone o repositório:

bash
git clone https://github.com/seu-usuario/ieadbam-tefe.git
Navegue até o diretório do projeto:

bash
cd ieadbam-tefe
Abra o arquivo index.html em seu navegador:

bash
# Usando Python
python -m http.server 8000

# Ou simplesmente abra o arquivo index.html diretamente no navegador
Estrutura de Arquivos
text
ieadbam-tefe/
│
├── index.html              # Arquivo principal
├── pexels-shelaghmurphy-1666816.jpg  # Imagem de fundo hero
├── agua.jpg                # Imagem projeto Águas Purificadoras
├── Just Game.png           # Logo Santo Rolê Gamer
├── batismo.jpg             # Imagem batismo
├── pexels-rquiros-2330141.jpg # Imagem galeria
├── agua1.jpg              # Imagem detalhe projeto água
├── rancho.jpg             # Imagem projeto alimentação
├── programa.jpg           # Imagem escola programação
├── ingles.jpg             # Imagem escola idiomas
├── musica.jpg             # Imagem escola música
└── Cinema.png             # Logo Santo Rolê Cine
📱 Responsividade
O site é totalmente responsivo e foi testado em:

✅ Desktop (1920px+)

✅ Laptop (1024px - 1920px)

✅ Tablet (768px - 1024px)

✅ Mobile (320px - 768px)

🎨 Características de Design
Paleta de Cores
css
:root {
  --primary: #2e8b57;       /* Verde Amazônia */
  --primary-light: #3cb371; /* Verde claro */
  --primary-dark: #1f6b48;  /* Verde escuro */
  --accent: #ffd700;        /* Dourado para destaque */
  --light: #ffffff;         /* Branco */
  --dark: #1a3c2b;          /* Verde muito escuro */
  --gray: #f5f5f5;          /* Cinza claro */
  --text: #333333;          /* Texto principal */
}
Tipografia
Fonte Principal: Montserrat (400, 500, 600, 700)

Hierarquia clara de títulos e textos

Contraste otimizado para acessibilidade

🔧 Personalização
Adicionando Novos Eventos
Para adicionar novos eventos ao calendário, edite a array eventsData no JavaScript:

javascript
const eventsData = [
  {
    id: 6,
    title: "Nome do Evento",
    date: "2025-11-15", // Formato: YYYY-MM-DD
    time: "19:00 - 21:00",
    location: "Sede da IEADBAM Tefé",
    description: "Descrição detalhada do evento.",
    category: "categoria",
    whatsapp: "https://wa.me/5592981752241?text=Mensagem%20personalizada"
  }
  // ... outros eventos
];
Modificando Cores
As cores podem ser facilmente modificadas editando as variáveis CSS no :root.

🌐 SEO e Acessibilidade
Meta tags otimizadas para mecanismos de busca

Open Graph para compartilhamento em redes sociais

Alt text em todas as imagens

ARIA labels para elementos interativos

Navegação por teclado habilitada

📞 Integrações
WhatsApp Business: Links diretos para conversas

Redes Sociais: Instagram, Facebook, YouTube

Google Maps: Localização da igreja

🤝 Contribuição
Contribuições são bem-vindas! Para contribuir:

Fork o projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

👥 Desenvolvido Por
IEADBAM Tefé - GitHub

🙏 Agradecimentos
Comunidade IEADBAM Tefé

Voluntários e colaboradores

Todos os membros que contribuíram com feedback

IEADBAM Tefé - Uma comunidade de fé, amor e esperança em Tefé, Amazonas
