document.addEventListener("DOMContentLoaded", function() {
    const campanhas = document.querySelectorAll('.campanha');
    const hoje = new Date();
    
    campanhas.forEach(campanha => {
        const validade = new Date(campanha.dataset.validade);
        const diffTime = validade - hoje;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const icon = campanha.querySelector('.icon');
        
        if (diffDays < 0) {
            campanha.classList.add('expired');
            icon.classList.add('fas', 'fa-times-circle');
        } else if (diffDays <= 5) {
            campanha.classList.add('warning');
            icon.classList.add('fas', 'fa-clock');
        } else {
            campanha.classList.add('active');
            icon.classList.add('fas', 'fa-check-circle');
        }
    });
});