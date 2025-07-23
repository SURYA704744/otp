const inputs = document.querySelector(".inputx");
inputs.addEventListener("input", function (e) {
  const target = e.target;
  const val = target.value;
  if (isNaN(val)) {
    target.value = "";
    return;
  }
  if (val != "") {
    const nextinput = target.nextElementSibling;
    if (nextinput) {
      nextinput.focus();
    }
  }
});
 
inputs.addEventListener("keydown", function (e) {
   const target = e.target;
   
   if ((e.key == "Backspace" || e.key == "delete") && target.value === "") {
      const prevInput = target.previousElementSibling;
      if (prevInput) {
          prevInput.value = "";
          prevInput.focus();
      }
   }
});
