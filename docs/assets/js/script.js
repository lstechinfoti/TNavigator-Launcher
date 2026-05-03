const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");
const toTop = document.querySelector("#toTop");
const modal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const modalClose = document.querySelector("#modalClose");
const galleryButtons = document.querySelectorAll(".shot");
const copyHashCommand = document.querySelector("#copyHashCommand");
const hashCommand = document.querySelector("#hashCommand");
const currentYear = document.querySelector("#currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Menu mobile
function closeMenu() {
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

// Botão voltar ao topo
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    toTop?.classList.add("is-visible");
  } else {
    toTop?.classList.remove("is-visible");
  }
});

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Modal de imagem
function openModal(src, alt) {
  if (!modal || !modalImage) return;

  modalImage.src = src;
  modalImage.alt = alt || "Imagem ampliada";
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal || !modalImage) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  document.body.style.overflow = "";
}

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const src = button.dataset.img;
    const img = button.querySelector("img");
    openModal(src, img?.alt);
  });
});

modalClose?.addEventListener("click", closeModal);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeMenu();
  }
});

// Copiar comando SHA256
copyHashCommand?.addEventListener("click", async () => {
  const text = hashCommand?.textContent?.trim();

  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    const oldText = copyHashCommand.textContent;
    copyHashCommand.textContent = "Copiado!";
    setTimeout(() => {
      copyHashCommand.textContent = oldText;
    }, 1800);
  } catch {
    alert("Não foi possível copiar automaticamente. Copie manualmente o comando.");
  }
});

// Animações ao rolar
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px"
  }
);

revealElements.forEach((element) => observer.observe(element));

// Fechar menu ao clicar fora
document.addEventListener("click", (event) => {
  if (!navMenu || !navToggle) return;

  const clickedInsideMenu = navMenu.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle) {
    closeMenu();
  }
});


// Destaque automático do link ativo no menu
const sections = [...document.querySelectorAll("main section[id]")];
const menuLinks = [...document.querySelectorAll(".nav-menu a[href^='#']")];

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const id = entry.target.getAttribute("id");
    menuLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
    });
  });
}, {
  threshold: 0.35
});

sections.forEach((section) => activeObserver.observe(section));
