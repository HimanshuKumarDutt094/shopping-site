const removeButton = document.querySelectorAll(
  "div>[data-remove-from-cart-button]"
);

removeButton.forEach((button) => {
  console.log(button.parentElement, "\n", button.parentNode);

  button.addEventListener("click", (event) => {
    console.log(button.parentElement, "\n", button.parentNode);
  });
});
