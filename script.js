//Scroll dos links internos da pg (suave)
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    let scrollOffset = 0;

    if (sectionId === "#projetos") {
      scrollOffset = section.offsetTop - 70;
    } else {
      scrollOffset =
        section.offsetTop - (window.innerHeight - section.clientHeight) / 2;
    }
    window.scrollTo({
      top: scrollOffset,
      behavior: "smooth",
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = link.getAttribute("href");
      scrollToSection(sectionId);
    });
  });
});

/*FORM de Contato*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const successMessage = document.getElementById("success-message");
  const erroMessage = document.getElementById("erro-message");
  const loading = document.getElementById("loading");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const messagem = document.getElementById("mensagem").value;

    form.style.display = "none";
    successMessage.style.display = "none";
    erroMessage.style.display = "none";
    loading.style.display = "block";

    const data = {
      to: "emanoelpontes8@hotmail.com",
      from: "emanoelpontes8@gmail.com",
      subject: "Contato do site",
      text: "Contato do site",
      html: `<p>Nome: ${nome}</p><br>
      <p>Email: ${email}</p></p><br>
      <p>Assunto: ${assunto}</p></p><br>
      <p>Messagem: ${messagem}</p>`,
    };

    fetch("", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          loading.style.display = "none";
          successMessage.style.display = "block";
        } else {
          loading.style.display = "none";
          erroMessage.style.display = "block";
          console.error(
            `Erro na resposta da API: ${res.status} - ${res.statusText}`
          );
        }
      })
      .catch((error) => {
        console.error(error);
        loading.style.display = "none";
        erroMessage.style.display = "block";
      });
  });
});
