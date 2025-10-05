/* =============================================
   VALIDAÇÃO DE CAMPOS - CORES E CONSTANTES
   ============================================= */
const red = '#D20528';
const blue = '#21bd13';

/* =============================================
   EFEITO DE NAVBAR AO ROLAR
   ============================================= */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-glass');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

/* =============================================
   ANIMAÇÃO AOS (Scroll Animations)
   ============================================= */
document.addEventListener('DOMContentLoaded', function() {
    // Observador de intersecção para animações ao rolar
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Anima todos os cards
    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Anima benefit cards
    document.querySelectorAll('.benefit-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
    });
});

/* =============================================
   SMOOTH SCROLL PARA LINKS INTERNOS
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // altura da navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

/* =============================================
   FEEDBACK VISUAL PARA FORMULÁRIOS
   ============================================= */
function showFormSuccess(formId) {
    const form = document.getElementById(formId);
    const messageId = formId === 'contactForm' ? 'message' : 'messageMobile';
    const messageEl = document.getElementById(messageId);
    
    if (messageEl) {
        messageEl.innerHTML = '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.';
        messageEl.style.color = blue;
        messageEl.style.fontWeight = '600';
        messageEl.style.display = 'block';
        
        // Scroll suave até a mensagem
        messageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Limpa o formulário após 2 segundos
        setTimeout(() => {
            form.reset();
            setTimeout(() => {
                messageEl.style.display = 'none';
            }, 3000);
        }, 2000);
    }
}

/* =============================================
   VALIDAÇÃO DESKTOP
   ============================================= */
function validaCamposDesk(){
    return validaNomeDesk() && 
           validaEmailDesk() && 
           validaTelefoneDesk() &&
           validaMensagemDesk();
}

function validaEmailDesk(){
    const email = document.getElementById("emailDesk").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(email === ""){
        document.getElementById("emailDesk").style.borderColor = red;
        document.getElementById("avisoEmailDesk").innerHTML = "📧 Qual o seu email?";
        document.getElementById("avisoEmailDesk").style.color = red;
        return false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailDesk").style.borderColor = red;
        document.getElementById("avisoEmailDesk").innerHTML = "📧 Por favor, insira um email válido";
        document.getElementById("avisoEmailDesk").style.color = red;
        return false;
    } else {
        document.getElementById("emailDesk").style.borderColor = blue;
        document.getElementById("avisoEmailDesk").innerHTML = "✓";
        document.getElementById("avisoEmailDesk").style.color = blue;
        return true;
    }
}

function validaNomeDesk(){
    const nome = document.getElementById("nomeDesk").value.trim();
    
    if(nome === ""){
        document.getElementById("nomeDesk").style.borderColor = red;
        document.getElementById("avisoNomeDesk").innerHTML = "👤 Hey! Qual o seu nome?";
        document.getElementById("avisoNomeDesk").style.color = red;
        return false;
    } else if (nome.length < 3) {
        document.getElementById("nomeDesk").style.borderColor = red;
        document.getElementById("avisoNomeDesk").innerHTML = "👤 Nome muito curto";
        document.getElementById("avisoNomeDesk").style.color = red;
        return false;
    } else {
        document.getElementById("nomeDesk").style.borderColor = blue;
        document.getElementById("avisoNomeDesk").innerHTML = "✓";
        document.getElementById("avisoNomeDesk").style.color = blue;
        return true;
    }
}

function validaTelefoneDesk(){
    const telefone = document.getElementById("foneDesk").value.trim();
    const telefoneRegex = /^[\d\s\(\)\-\+]+$/;
    
    if(telefone === ""){
        document.getElementById("foneDesk").style.borderColor = red;
        document.getElementById("avisoFoneDesk").innerHTML = "📱 Qual o seu telefone?";
        document.getElementById("avisoFoneDesk").style.color = red;
        return false;
    } else if (!telefoneRegex.test(telefone) || telefone.length < 8) {
        document.getElementById("foneDesk").style.borderColor = red;
        document.getElementById("avisoFoneDesk").innerHTML = "📱 Telefone inválido";
        document.getElementById("avisoFoneDesk").style.color = red;
        return false;
    } else {
        document.getElementById("foneDesk").style.borderColor = blue;
        document.getElementById("avisoFoneDesk").innerHTML = "✓";
        document.getElementById("avisoFoneDesk").style.color = blue;
        return true;
    }
}

function validaMensagemDesk(){
    const mensagem = document.getElementById("mensagemDesk").value.trim();
    
    if(mensagem === ""){
        document.getElementById("mensagemDesk").style.borderColor = red;
        document.getElementById("avisoMensagemDesk").innerHTML = "💬 Qual a sua mensagem?";
        document.getElementById("avisoMensagemDesk").style.color = red;
        return false;
    } else if (mensagem.length < 10) {
        document.getElementById("mensagemDesk").style.borderColor = red;
        document.getElementById("avisoMensagemDesk").innerHTML = "💬 Mensagem muito curta";
        document.getElementById("avisoMensagemDesk").style.color = red;
        return false;
    } else {
        document.getElementById("mensagemDesk").style.borderColor = blue;
        document.getElementById("avisoMensagemDesk").innerHTML = "✓";
        document.getElementById("avisoMensagemDesk").style.color = blue;
        return true;
    }
}

/* =============================================
   VALIDAÇÃO MOBILE
   ============================================= */
function validaCamposMobile(){
    return validaNomeMobile() && 
           validaEmailMobile() && 
           validaTelefoneMobile() &&
           validaMensagemMobile();
}

function validaEmailMobile(){
    const email = document.getElementById("emailMobile").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(email === ""){
        document.getElementById("emailMobile").style.borderColor = red;
        document.getElementById("avisoEmailMobile").innerHTML = "📧 Qual o seu email?";
        document.getElementById("avisoEmailMobile").style.color = red;
        return false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailMobile").style.borderColor = red;
        document.getElementById("avisoEmailMobile").innerHTML = "📧 Email inválido";
        document.getElementById("avisoEmailMobile").style.color = red;
        return false;
    } else {
        document.getElementById("emailMobile").style.borderColor = blue;
        document.getElementById("avisoEmailMobile").innerHTML = "✓";
        document.getElementById("avisoEmailMobile").style.color = blue;
        return true;
    }
}

function validaNomeMobile(){
    const nome = document.getElementById("nomeMobile").value.trim();
    
    if(nome === ""){
        document.getElementById("nomeMobile").style.borderColor = red;
        document.getElementById("avisoNomeMobile").innerHTML = "👤 Hey! Qual o seu nome?";
        document.getElementById("avisoNomeMobile").style.color = red;
        return false;
    } else if (nome.length < 3) {
        document.getElementById("nomeMobile").style.borderColor = red;
        document.getElementById("avisoNomeMobile").innerHTML = "👤 Nome muito curto";
        document.getElementById("avisoNomeMobile").style.color = red;
        return false;
    } else {
        document.getElementById("nomeMobile").style.borderColor = blue;
        document.getElementById("avisoNomeMobile").innerHTML = "✓";
        document.getElementById("avisoNomeMobile").style.color = blue;
        return true;
    }
}

function validaTelefoneMobile(){
    const telefone = document.getElementById("foneMobile").value.trim();
    const telefoneRegex = /^[\d\s\(\)\-\+]+$/;
    
    if(telefone === ""){
        document.getElementById("foneMobile").style.borderColor = red;
        document.getElementById("avisoFoneMobile").innerHTML = "📱 Qual o seu telefone?";
        document.getElementById("avisoFoneMobile").style.color = red;
        return false;
    } else if (!telefoneRegex.test(telefone) || telefone.length < 8) {
        document.getElementById("foneMobile").style.borderColor = red;
        document.getElementById("avisoFoneMobile").innerHTML = "📱 Telefone inválido";
        document.getElementById("avisoFoneMobile").style.color = red;
        return false;
    } else {
        document.getElementById("foneMobile").style.borderColor = blue;
        document.getElementById("avisoFoneMobile").innerHTML = "✓";
        document.getElementById("avisoFoneMobile").style.color = blue;
        return true;
    }
}

function validaMensagemMobile(){
    const mensagem = document.getElementById("mensagemMobile").value.trim();
    
    if(mensagem === ""){
        document.getElementById("mensagemMobile").style.borderColor = red;
        document.getElementById("avisoMensagemMobile").innerHTML = "💬 Qual a sua mensagem?";
        document.getElementById("avisoMensagemMobile").style.color = red;
        return false;
    } else if (mensagem.length < 10) {
        document.getElementById("mensagemMobile").style.borderColor = red;
        document.getElementById("avisoMensagemMobile").innerHTML = "💬 Mensagem muito curta";
        document.getElementById("avisoMensagemMobile").style.color = red;
        return false;
    } else {
        document.getElementById("mensagemMobile").style.borderColor = blue;
        document.getElementById("avisoMensagemMobile").innerHTML = "✓";
        document.getElementById("avisoMensagemMobile").style.color = blue;
        return true;
    }
}

/* =============================================
   LAZY LOADING DE IMAGENS
   ============================================= */
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
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* =============================================
   CONTADOR DE CARACTERES (OPCIONAL)
   ============================================= */
console.log('🌿 FAMIGU Plantas - Site carregado com sucesso!');