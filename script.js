// ==================== CONFIGURAÇÃO DE PRODUTOS ====================
const products = {
    masculino: [
        { 
            id: 1, 
            name: 'Conjunto Casual Premium', 
            category: 'masculino', 
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/2wBDAQICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==' 
        },
        { 
            id: 2, 
            name: 'Camisa Social Branca', 
            category: 'masculino', 
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/2wBDAQICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==' 
        },
        { 
            id: 3, 
            name: 'Blazer Executivo', 
            category: 'masculino', 
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/2wBDAQICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==' 
        },
        { 
            id: 4, 
            name: 'Polo Sofisticada', 
            category: 'masculino', 
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/2wBDAQICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==' 
        },
        { 
            id: 5, 
            name: 'Shorts Premium', 
            category: 'masculino', 
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/2wBDAQICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==' 
        },
        { 
            id: 6, 
            name: 'Camisa Linho Premium', 
            category: 'masculino', 
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/2wBDAQICAgICAwUDAwwDAwsLBAwMCwsLDA0ODAwNDwwOEg0LDw4SFAwSFBMUFBwWFhYTGhgXGhYaHSj/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==' 
        }
    ],
    feminino: [
        { 
            id: 7, 
            name: 'Vestido Festa Vermelho', 
            category: 'feminino', 
            image: 'https://via.placeholder.com/300x350/c41e3a/ffffff?text=Vestido+Vermelho' 
        },
        { 
            id: 8, 
            name: 'Blazer Branco Elegante', 
            category: 'feminino', 
            image: 'https://via.placeholder.com/300x350/f5f5f5/d4a574?text=Blazer+Branco' 
        },
        { 
            id: 9, 
            name: 'Calça Social Premium', 
            category: 'feminino', 
            image: 'https://via.placeholder.com/300x350/2d2d2d/d4a574?text=Calça+Social' 
        },
        { 
            id: 10, 
            name: 'Top Sofisticado', 
            category: 'feminino', 
            image: 'https://via.placeholder.com/300x350/c69c8a/ffffff?text=Top' 
        },
        { 
            id: 11, 
            name: 'Saia Midi Elegante', 
            category: 'feminino', 
            image: 'https://via.placeholder.com/300x350/3d5c4d/ffffff?text=Saia+Midi' 
        },
        { 
            id: 12, 
            name: 'Macaquinho Premium', 
            category: 'feminino', 
            image: 'https://via.placeholder.com/300x350/8b7f75/ffffff?text=Macaquinho' 
        }
    ],
    infantil: [
        { 
            id: 13, 
            name: 'Camisa Infantil Estampa', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/87ceeb/ffffff?text=Camisa+Infantil' 
        },
        { 
            id: 14, 
            name: 'Calça Confortável', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/f0f8ff/d4a574?text=Calça+Infantil' 
        },
        { 
            id: 15, 
            name: 'Vestido Infantil Rosa', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/ffb6c1/ffffff?text=Vestido+Rosa' 
        },
        { 
            id: 16, 
            name: 'Conjunto Menino', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/a9a9a9/ffffff?text=Conjunto' 
        },
        { 
            id: 17, 
            name: 'Shorts Colorido', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/ffa500/ffffff?text=Shorts' 
        },
        { 
            id: 18, 
            name: 'Blusa Menina', 
            category: 'infantil', 
            image: 'https://via.placeholder.com/300x350/dda0dd/ffffff?text=Blusa+Menina' 
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
