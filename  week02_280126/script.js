function toggleAddress() {
  const address = document.getElementById("address");

  if (address.style.display === "none" || address.style.display === "") {
    address.style.display = "block";
  } else {
    address.style.display = "none";
  }
}
