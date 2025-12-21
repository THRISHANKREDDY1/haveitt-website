function orderNow(product) {
  let message = `New Order Interest 🔔

Product: ${product}
City: Hyderabad

Customer Name:
Mobile:
Address:

Please share payment details.`;

  let phone = "8790966832";
  let url = "https://wa.me/91" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
