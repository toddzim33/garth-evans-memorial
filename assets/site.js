const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelector("#memory-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#form-status").textContent = "Prototype only: your memory has not been transmitted. The private submission service will be connected here after we choose the intake and review workflow.";
});
