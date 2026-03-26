// ARRAY med produkter laver eb liste med alle produkterne
const produkter = [
  { navn: "Vingummi bamser", pris: 25, billede: "vingummibamser.jpg" },
  { navn: "Slikepinde", pris: 12, billede: "slikepind.jpg" },
  { navn: "Chokolade", pris: 35, billede: "slik1.jpg" },
  { navn: "Påskeæg", pris: 80, billede: "påskeæg.png" },
  { navn: "Karameller", pris: 25, billede: "karameller.png" },
  { navn: "Lakrids", pris: 35, billede: "lakrids.png" }, // rettet stavefejl
];

// ARRAY til at gemme hvad brugeren køber
const kurv = [];

// Referencer til HTML-elementer
const productContainer = document.querySelector(".produkter"); // hvor kottene med slik skal stå
const cartContainer = document.getElementById("cart-count"); //viser hvor mange ting er i kurven

// Funktion til at opdatere kurven
function opdaterKurv() {
  cartContainer.textContent = kurv.length; //viser hvor mange ting er i kurven

  console.log("Total pris:", total + " kr");
}
//viser hvor meget tingene koster
let total = 0;
kurv.forEach((item) => {
  total += item.pris;
});
// Generer produkterne dynamisk
if (productContainer) {
  productContainer.innerHTML = ""; // ryd containeren først
  produkter.forEach((produkt, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    //indhold i kortet (billede, navn, pris og knap)
    card.innerHTML = `
      <img src="${produkt.billede}" alt="${produkt.navn}">
      <h3>${produkt.navn}</h3>
      <p>${produkt.pris} kr</p>
      <button class="køb-btn">køb</button>
    `;
    //finder knappen i kortet og tilføjer en event listener, så når man klikker på knappen, så bliver produktet tilføjet til kurven og opdaterer kurven
    const button = card.querySelector(".køb-btn");
    button.addEventListener("click", () => {
      kurv.push(produkt);
      opdaterKurv();

      const now = new Date();
      alert(
        `Du købte ${produkt.navn} for ${produkt.pris} kr. kl. ${now.toLocaleTimeString()}`,
      );

      card.classList.add("added"); // kan bruges til animation/effekt
    });
    //sætter kortet ind på siden
    productContainer.appendChild(card);
  });
}
