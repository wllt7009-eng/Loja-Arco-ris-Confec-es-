// ==================== CONFIGURAÇÃO DE PRODUTOS ====================
const products = {
    masculino: [
        { id: 1, name: 'Camisa Premium Linho', category: 'masculino', image: 'https://via.placeholder.com/300x350/e8e4d0/d4a574?text=Camisa+Linho' },
        { id: 2, name: 'Calça Slim Elegante', category: 'masculino', image: 'https://via.placeholder.com/300x350/d9d4c3/d4a574?text=Calça+Slim' },
        { id: 3, name: 'Blazer Executivo', category: 'masculino', image: 'https://via.placeholder.com/300x350/e0dcc8/d4a574?text=Blazer' },
        { id: 4, name: 'Polo Sofisticada', category: 'masculino', image: 'https://via.placeholder.com/300x350/ede8da/d4a574?text=Polo' },
        { id: 5, name: 'Shorts Premium', category: 'masculino', image: 'https://via.placeholder.com/300x350/e8e4d0/d4a574?text=Shorts' },
        { id: 6, name: 'Camisa Social Branca', category: 'masculino', image: 'https://via.placeholder.com/300x350/f5f3ef/d4a574?text=Social' }
    ],
    feminino: [
        { id: 7, name: 'Vestido Festa Vermelho', category: 'feminino', image: 'https://via.placeholder.com/300x350/c41e3a/d4a574?text=Vestido' },
        { id: 8, name: 'Blazer Branco Elegante', category: 'feminino', image: 'https://via.placeholder.com/300x350/f5f5f5/d4a574?text=Blazer' },
        { id: 9, name: 'Calça Social Premium', category: 'feminino', image: 'https://via.placeholder.com/300x350/2d2d2d/d4a574?text=Calça' },
        { id: 10, name: 'Top Sofisticado', category: 'feminino', image: 'https://via.placeholder.com/300x350/c69c8a/d4a574?text=Top' },
        { id: 11, name: 'Saia Midi Elegante', category: 'feminino', image: 'https://via.placeholder.com/300x350/3d5c4d/d4a574?text=Saia' },
        { id: 12, name: 'Macaquinho Premium', category: 'feminino', image: 'https://via.placeholder.com/300x350/8b7f75/d4a574?text=Macaquinho' }
    ],
    infantil: [
        { id: 13, name: 'Camisa Infantil Estampa', category: 'infantil', image: 'https://via.placeholder.com/300x350/87ceeb/d4a574?text=Camisa' },
        { id: 14, name: 'Calça Confortável', category: 'infantil', image: 'https://via.placeholder.com/300x350/f0f8ff/d4a574?text=Calça' },
        { id: 15, name: 'Vestido Infantil Rosa', category: 'infantil', image: 'https://via.placeholder.com/300x350/ffb6c1/d4a574?text=Vestido' },
        { id: 16, name: 'Conjunto Menino', category: 'infantil', image: 'https://via.placeholder.com/300x350/a9a9a9/d4a574?text=Conjunto' },
        { id: 17, name: 'Shorts Colorido', category: 'infantil', image: 'https://via.placeholder.com/300x350/ffa500/d4a574?text=Shorts' },
        { id: 18, name: 'Blusa Menina', category: 'infantil', image: 'https://via.placeholder.com/300x350/dda0dd/d4a574?text=Blusa' }
    ]
};

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('masculino');
    renderProducts('feminino');
    renderProducts('infantil');
    setupAnimations();
    setupNavigation();
});

// ==================== RENDERIZAR PRODUTOS ====================
function renderProducts(category) {
    const container = document.getElementById(`${category}-products`);
    const categoryProducts = products[category];

    container.innerHTML = categoryProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <button class="btn-secondary" onclick="openWhatsApp('${product.name}')">
                    Tenho interesse
                </button>
            </div>
        </div>
    `).join('');
}

// ==================== WHATSAPP INTEGRATION ====================
function openWhatsApp(productName) {
    const phoneNumber = '5538999999999'; // EDITE COM O NÚMERO DA LOJA
    let message;

    if (productName === 'geral') {
        message = encodeURIComponent('Olá! Tenho interesse em conhecer as coleções da Loja Arco Íris. Poderiam me informar mais sobre os produtos?');
    } else {
        message = encodeURIComponent(`Olá! Tenho interesse nessa peça: ${productName}`);
    }

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// ==================== ANIMAÇÕES AO SCROLL ====================
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// ==================== NAVEGAÇÃO MOBILE ====================
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar-container')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ==================== SCROLL SUAVE ====================
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ==================== LAZY LOADING DE IMAGENS ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== THROTTLE PARA SCROLL ====================
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
