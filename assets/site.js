document.querySelector("#memory-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#form-status").textContent = "Prototype only: your memory has not been transmitted. The private submission service will be connected here later.";
});
