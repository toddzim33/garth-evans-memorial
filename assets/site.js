const memoryForm = document.querySelector("#memory-form");
const photoInput = memoryForm?.querySelector('input[name="photo"]');
const photoStatus = document.querySelector("#photo-status");

memoryForm?.addEventListener("submit", (event) => {
  const photos = Array.from(photoInput?.files || []);
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  const maxSize = 10 * 1024 * 1024;
  const totalSize = photos.reduce((total, photo) => total + photo.size, 0);

  if (photos.some((photo) => !allowedTypes.includes(photo.type)) || totalSize > maxSize) {
    event.preventDefault();
    if (photoStatus) photoStatus.textContent = "Please choose a JPG, PNG, or WebP image under 10 MB.";
    return;
  }

  const button = memoryForm.querySelector("button");
  if (button) {
    button.disabled = true;
    button.firstChild.textContent = "Sending this memory ";
  }
});
