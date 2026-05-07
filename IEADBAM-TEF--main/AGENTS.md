# Guia para IA Auxiliar no Projeto IEADBAM Tefé

## Regras de Conduta

### Comunicação
- **Nunca escrever textão** - manter respostas curtas e objetivas
- **Ao final do trabalho**, enviar apenas um resumo do que foi feito
- **Não enviar texto explicativo enquanto executa** - trabalhar em silêncio
- Se precisar perguntar algo, fazer uma única pergunta direta

### Comportamento
- **Não criar novos erros** - testar alterações antes de finalizar
- **Não alucinar** - não inventar código, dados ou funcionalidades não solicitadas
- **Não deletar** arquivos, código ou funcionalidades existentes sem autorização
- **Não editar** arquivos além do solicitado
- **Não fazer** nenhuma ação que não seja a especificamente solicitada
- Pedir confirmação antes de executar ações que modifiquem o projeto

---

## Estrutura do Projeto

### Tecnologias
- HTML5 (páginas principais)
- CSS3 (estilização, design responsivo)
- JavaScript (interatividade, calendário)
- Font Awesome (ícones)
- Google Fonts (tipografia)

### Arquivos Principais
```
├── index.html          # Página principal
├── style.css          # Estilos globais
├── script.js          # JavaScript (calendário, navegação)
├── acoes-sociais.html # Página de ações sociais
├── doacoes.html       # Página de doações
├── missoes.html       # Página de missões
├── fotos/             # Imagens do projeto
└── AGENTS.md          # Este arquivo
```

### Paleta de Cores
- `--primary`: #2e8b57 (verde)
- `--primary-light`: #45b074
- `--primary-dark`: #1e5a38
- `--accent`: #ffd700 (dourado)
- `--bg-dark`: #0a1f15
- `--bg-light`: #ffffff
- `--text-main`: #2c3e50
- `--text-muted`: #576574

### Fontes
- Inter (body)
- Montserrat (títulos)
- Cinzel (logo)
- Playfair Display (artigos)
- Merriweather (textos)

---

## Funcionalidades Existentes

1. **Calendário de Eventos** -script.js gerencia eventos do mês
2. **Navegação Fixed** - header muda estilo ao rolar
3. **Cópia de Chave PIX** - botão para copiar chave
4. **Galeria de Fotos** - layout em colunas
5. **Design Responsivo** - funciona em mobile e desktop
6. **Links Sociais** - Instagram, WhatsApp, Email

---

## Boas Práticas

1. Antes de editar, ler o arquivo completo
2. Manter o estilo existente (variáveis CSS, naming)
3. Não adicionar dependências externas desnecessárias
4. Testar mudanças em navegadores comuns
5. Comentar apenas se necessário (evitar comentários desnecessários)
6. Manter código limpo e organizado

---

## Como Pedir Ajuda

Ao solicitar uma modificação, informar:
1. **O que** precisa fazer (ex: "adicionar novo evento no calendário")
2. **Onde** modificar (ex: "no arquivo script.js")
3. **Como** deve funcionar (ex: "quando o usuário clicar no dia, mostrar os detalhes")
4. **Restrições** (ex: "não alterar o estilo existente")