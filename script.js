//Scroll dos links internos da pg (suave)
// function scrollToSection(sectionId) {
//   const section = document.querySelector(sectionId);
//   if (section) {
//     let scrollOffset = 0;

//     if (sectionId === "#projetos") {
//       scrollOffset = section.offsetTop - 70;
//     } else {
//       scrollOffset =
//         section.offsetTop - (window.innerHeight - section.clientHeight) / 2;
//     }
//     window.scrollTo({
//       top: scrollOffset,
//       behavior: "smooth",
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll("nav a");
//   links.forEach(function (link) {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const sectionId = link.getAttribute("href");
//       scrollToSection(sectionId);
//     });
//   });
// });

//Scroll Suave forma de codificar aprimorada
const linksInternos = document.querySelectorAll(".js-menu a[href^='#']"); //seleção dos links internos

function scrollSelection(e) {
  e.preventDefault(); //previne para não descer até asection bruscamente
  const href = e.currentTarget.getAttribute("href"); //seleciona apenas o href
  const section = document.querySelector(href); //lincando o href com a section do href clicado

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

linksInternos.forEach((i) => {
  i.addEventListener("click", scrollSelection);
});

/*Animação Scroll*/

const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.7;

function animaScroll() {
  sections.forEach((i) => {
    const sectionTop = i.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) i.classList.add("ativo");
    else i.classList.remove("ativo");
  });
}

animaScroll();

window.addEventListener("scroll", animaScroll);

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
      to: "contatoemanoeltimbo8@hotmail.com",
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
