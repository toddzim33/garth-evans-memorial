const memoryForm = document.querySelector("#memory-form");

memoryForm?.addEventListener("submit", () => {
  const button = memoryForm.querySelector("button");
  if (button) {
    button.disabled = true;
    button.firstChild.textContent = "Sending this memory ";
  }
});
