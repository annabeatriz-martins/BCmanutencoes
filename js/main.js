document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tabBtn');
  const formContents = document.querySelectorAll('form');

  const btnEmail = document.getElementById('btnEmail');
  const btnTelefone = document.getElementById('btnTel');

  const emailCliente = document.getElementById('email');
  const nomeEmail = document.getElementById('nomeEmail');
  const equipEmail = document.getElementById('equipEmail');
  const cidadeEmail = document.getElementById('cidadeEmail');

  const telefoneCliente = document.getElementById('telefone');
  const nomeTel = document.getElementById('nomeTel');
  const equipTel = document.getElementById('equipTel');
  const cidadeTel = document.getElementById('cidadeTel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      formContents.forEach(form => form.classList.remove('active'));

      button.classList.add('active');

      const targetTab = button.dataset.tab;
      const targetForm = document.getElementById(`form${targetTab}`);
      if (targetForm) {
        targetForm.classList.add('active');
      }
    });
  });

  if (btnEmail) {
    btnEmail.addEventListener('click', function(event) {

      const email = emailCliente.value;
      const nome = nomeEmail.value;
      const equipamento = equipEmail.value;
      const cidade = cidadeEmail.value;

      if (!email || !nome || !cidade) {
                alert("Por favor, preencha os campos obrigatórios.");
                return;
            }

      let subject = encodeURIComponent("Solicitação de Orçamento - Manutenção de Equipamento");
      let body = encodeURIComponent(`Olá, meu nome é ${nome} e gostaria de solicitar um orçamento para ${equipamento}. Sou de ${cidade}. Meu e-mail é ${email}.`);

      window.location.href = `mailto:b.cmanutmaquinas@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  if (btnTelefone) {
    btnTelefone.addEventListener('click', function(event) {

      const telefone = telefoneCliente.value;
      const nome = nomeTel.value;
      const equipamento = equipTel.value;
      const cidade = cidadeTel.value;

      const numeroEmpresa = "5513981653448";

      if (!telefone || !nome || !cidade) {
                alert("Por favor, preencha os campos obrigatórios.");
                return;
            }

      let mensagem = encodeURIComponent(`Olá, meu nome é ${nome} e gostaria de solicitar um orçamento para ${equipamento}. Sou de ${cidade}. Meu WhatsApp é ${telefone}.`);

      window.open(`https://wa.me/${numeroEmpresa}?text=${mensagem}`, '_blank');
    });
  }

  const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mainNav = document.getElementById('mainNav');

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 915) {
                    mainNav.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                }
            });
        });
    }
});
