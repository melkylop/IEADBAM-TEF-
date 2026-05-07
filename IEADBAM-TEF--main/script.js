const eventsData = [
    // Sábados - Discipulado/Diaconato
    { id: 1, title: "Discipulado / Diaconato", date: "2026-05-02", time: "18:00", location: "Templo Central", description: "Formação ministerial e estudo bíblico." },
    { id: 2, title: "Discipulado / Diaconato", date: "2026-05-09", time: "18:00", location: "Templo Central", description: "Formação ministerial e estudo bíblico." },
    { id: 3, title: "Discipulado / Diaconato", date: "2026-05-16", time: "18:00", location: "Templo Central", description: "Formação ministerial e estudo bíblico." },
    { id: 4, title: "Discipulado / Diaconato", date: "2026-05-23", time: "18:00", location: "Templo Central", description: "Formação ministerial e estudo bíblico." },
    { id: 5, title: "Discipulado / Diaconato", date: "2026-05-30", time: "18:00", location: "Templo Central", description: "Formação ministerial e estudo bíblico." },
    
    // Domingos - Cultos
    { id: 6, title: "Culto da Família", date: "2026-05-03", time: "19:00", location: "Templo Central", description: "Um momento de louvor e adoração com toda a família." },
    { id: 7, title: "Culto Especial - Dia das Mães", date: "2026-05-10", time: "19:00", location: "Templo Central", description: "Celebração especial dedicada a todas as mães." },
    { id: 8, title: "Culto da Família", date: "2026-05-17", time: "19:00", location: "Templo Central", description: "Um momento de louvor e adoração com toda a família." },
    { id: 9, title: "Culto da Família", date: "2026-05-24", time: "19:00", location: "Templo Central", description: "Um momento de louvor e adoração com toda a família." },
    { id: 10, title: "Culto da Família", date: "2026-05-31", time: "19:00", location: "Templo Central", description: "Um momento de louvor e adoração com toda a família." },
    
    // Aniversário da Igreja 2026
    { id: 11, title: "Aniversário da Igreja - 1º Dia", date: "2026-11-14", time: "19:00", location: "Templo Central", description: "Celebração de abertura do aniversário da nossa igreja." },
    { id: 12, title: "Aniversário da Igreja - 2º Dia", date: "2026-11-15", time: "18:00", location: "Templo Central", description: "Grande encerramento das festividades de aniversário." }
];

let currentDate = new Date(); // Inicia no mês atual

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCalendar();
    initMobileMenu();
});

function initNavigation() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
}

function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Fechar ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.querySelector('i').classList.add('fa-bars');
            menuBtn.querySelector('i').classList.remove('fa-times');
        });
    });
}

function initCalendar() {
    renderCalendar();
    document.getElementById('prev-month').addEventListener('click', () => changeMonth(-1));
    document.getElementById('next-month').addEventListener('click', () => changeMonth(1));
}

function renderCalendar() {
    const calendarDays = document.getElementById('calendar-days');
    const currentMonthLabel = document.getElementById('current-month-label');
    calendarDays.innerHTML = '';
    
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    currentMonthLabel.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    
    // Dias vazios do mês anterior
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day empty';
        calendarDays.appendChild(emptyDay);
    }
    
    // Dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = i;
        
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        const hasEvent = eventsData.some(e => e.date === dateStr);
        
        if (hasEvent) day.classList.add('has-event');
        
        // Marcar hoje
        const today = new Date();
        if (i === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
            day.classList.add('today');
        }

        day.addEventListener('click', () => {
            // Remover 'active' de todos e adicionar ao clicado
            document.querySelectorAll('.day').forEach(d => d.classList.remove('active'));
            day.classList.add('active');
            showDayEvents(dateStr, i);
        });

        calendarDays.appendChild(day);
    }
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar();
}

function showDayEvents(dateStr, dayNum) {
    const list = document.getElementById('month-events-list');
    const dateDisplay = document.getElementById('event-date-display');
    const dayEvents = eventsData.filter(e => e.date === dateStr);
    
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    dateDisplay.textContent = `${dayNum} de ${monthNames[currentDate.getMonth()]}`;

    if (dayEvents.length === 0) {
        list.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem;">Nenhum evento programado para este dia.</p>';
    } else {
        list.innerHTML = dayEvents.map(e => `
            <div class="event-item">
                <h4>${e.title}</h4>
                <span><i class="far fa-clock"></i> ${e.time} - <i class="fas fa-map-marker-alt"></i> ${e.location}</span>
                <p style="font-size: 0.85rem; margin-top: 8px; color: var(--text-muted);">${e.description}</p>
            </div>
        `).join('');
    }
}

function copyPixKey() {
    const key = document.getElementById('pix-key-text').textContent;
    navigator.clipboard.writeText(key).then(() => {
        const btn = document.querySelector('#doacoes .btn-accent');
        const originalText = btn.textContent;
        btn.textContent = 'Copiado!';
        setTimeout(() => btn.textContent = originalText, 2000);
    });
}

// Funções do Modal de Contato
function openContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Impede scroll
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restaura scroll
}

// Fechar ao clicar fora do modal
window.addEventListener('click', (e) => {
    const modal = document.getElementById('contact-modal');
    if (e.target === modal) {
        closeContactModal();
    }
});
