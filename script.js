/* ====================================================================
   SCRIPT DE INTERAÇÃO E VALIDAÇÃO - ATIVIDADE PRÁTICA UNINTER
   Aluna: Kauany Estevam da Silva | RU: 5487627
   ==================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. INTERAÇÃO DE TEMA: ALTERNÂNCIA ENTRE MODO CLARO E ESCURO
    // Captura o botão de alternar tema pelo ID definido no HTML
    const themeButton = document.getElementById("toggle-theme");
    
    themeButton.addEventListener("click", function() {
        // Liga/Desliga a classe 'dark-theme' no elemento body do HTML
        // Isso ativa as variáveis de cores escuras configuradas no CSS
        document.body.classList.toggle("dark-theme");
    });

    // 2. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
    // Captura o elemento do formulário para monitorar o evento de envio
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        // Interrompe o comportamento padrão do navegador de recarregar a página
        event.preventDefault();

        // Resgata os valores digitados limpando espaços em branco nas pontas (.trim)
        const nameValue = document.getElementById("name").value.trim();
        const emailValue = document.getElementById("email").value.trim();
        const messageValue = document.getElementById("message").value.trim();

        // Validação 1: Verificar se existe algum campo totalmente vazio
        if (nameValue === "" || emailValue === "" || messageValue === "") {
            alert("Atenção: Todos os campos do formulário (Nome, E-mail e Mensagem) devem ser preenchidos antes do envio!");
            return; // Bloqueia a execução do código neste ponto
        }

        // Validação 2: Verificar se o formato estrutural do e-mail inserido é válido
        // Padrão esperado: texto@texto.extensao (Exemplo: usuario@dominio.com)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            alert("Erro: O formato do e-mail inserido é inválido! Por favor, utilize o modelo: usuario@dominio.com");
            return; // Bloqueia a execução se o e-mail estiver errado
        }

        // 3. SIMULAÇÃO DE ENVIO E MENSAGEM DE CONFIRMAÇÃO
        // Se passar por todas as validações de segurança acima, o alerta de sucesso é disparado
        alert("Mensagem enviada com sucesso!\nAgradeço pelo seu contato, Kauany.");

        // Executa a limpeza completa dos campos digitados no formulário
        contactForm.reset();
    });
});