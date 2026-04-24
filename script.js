// ==================== CONFIGURAÇÃO DE PRODUTOS COM SUAS IMAGENS ====================
const products = {
    masculino: [
        { 
            id: 1, 
            name: 'Conjunto Casual Premium - Bege', 
            category: 'masculino', 
            image: 'arcoiris_loja__20260424_011948_969.jpg' 
        },
        { 
            id: 2, 
            name: 'Camisa Social Branca Premium', 
            category: 'masculino', 
            image: '' 
        },
        { 
            id: 3, 
            name: 'Blazer Executivo Preto', 
            category: 'masculino', 
            image: 'https://via.placeholder.com/300x350/2d2d2d/d4a574?text=Blazer+Preto' 
        },
        { 
            id: 4, 
            name: 'Polo Sofisticada Cinza', 
            category: 'masculino', 
            image: 'https://via.placeholder.com/300x350/a9a9a9/ffffff?text=Polo+Cinza' 
        },
        { 
            id: 5, 
            name: 'Shorts Premium Branco', 
            category: 'masculino', 
            image: 'https://via.placeholder.com/300x350/f0f0f0/1a1a1a?text=Shorts+Branco' 
        },
        { 
            id: 6, 
            name: 'Camisa Linho Premium Bege', 
            category: 'masculino', 
            image: 'https://via.placeholder.com/300x350/e8e4d0/1a1a1a?text=Camisa+Linho' 
        }
    ],
    feminino: [
        { 
            id: 7, 
            name: 'Vestido Festa Vermelho Elegante', 
            category: 'feminino', 
            image: 'arcoiris_loja__20260424_012011_708.jpg' 
        },
        { 
            id: 8, 
            name: 'Blazer Branco Sofisticado', 
            category: 'feminino', 
            image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop' 
        },
        { 
            id: 9, 
            name: 'Top Marrom Sofisticado', 
            category: 'feminino', 
            image: 'arcoiris_loja__20260424_011924_786.jpg' 
        },
        { 
            id: 10, 
            name: 'Calça Social Premium Preta', 
            category: 'feminino', 
            image: 'https://via.placeholder.com/300x350/2d2d2d/d4a574?text=Calça+Social' 
        },
        { 
            id: 11, 
            name: 'Saia Midi Elegante Verde', 
            category: 'feminino', 
            image: 'https://via.placeholder.com/300x350/3d5c4d/ffffff?text=Saia+Midi' 
        },
        { 
            id: 12, 
            name: 'Macaquinho Premium Elegante', 
            category: 'feminino', 
            image: 'https://via.placeholder.com/300x350/8b7f75/ffffff?text=Macaquinho' 
        }
    ],
    infantil: [
        { 
            id: 13, 
            name: 'Camisa Infantil Estampada', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/87ceeb/ffffff?text=Camisa+Infantil' 
        },
        { 
            id: 14, 
            name: 'Calça Confortável Kids', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/f0f8ff/1a1a1a?text=Calça+Infantil' 
        },
        { 
            id: 15, 
            name: 'Vestido Infantil Rosa', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/ffb6c1/ffffff?text=Vestido+Rosa' 
        },
        { 
            id: 16, 
            name: 'Conjunto Menino Premium', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/a9a9a9/ffffff?text=Conjunto' 
        },
        { 
            id: 17, 
            name: 'Shorts Colorido Infantil', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/ffa500/ffffff?text=Shorts' 
        },
        { 
            id: 18, 
            name: 'Blusa Menina Elegante', 
            category: 'infantil', 
            image: 'arcoiris_loja__20260424_012002_854.jpg' 
        }
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
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x350/e0e0e0/999999?text=Imagem+Indisponível'">
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
