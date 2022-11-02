const modal = document.querySelector("#modal");
const leftModal = document.querySelector(".left-arrow ");

document.addEventListener("click", (e) => {
  if (
    e.target.parentElement.classList[0] !== "pokemon" &&
    e.target.parentElement.classList[0] !== "detail" &&
    e.target.parentElement.classList[0] !== "types"
  ) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

leftModal.addEventListener("click", closeModal);

function closeModal() {
  modal.style = "none";
}

function openModalDetails(poke) {
  modal.style.display = "block";
  modal.classList = [];

  const type = poke.classList[1];
  modal.classList.add(type);

  const types = Array.from(poke.querySelectorAll(".type")).map(
    (type) => type.textContent
  );

  const name = poke.querySelector(".name").textContent;
  const number = poke.querySelector(".number").textContent;
  const img = poke.querySelector("img").src;

  const height = poke.querySelector("#height").textContent;
  const weight = poke.querySelector("#weight").textContent;
  const abilities = poke.querySelector("#abilities").textContent;

  modal.innerHTML = `
      <div class="pokemon-info">
        <img class="left-arrow" src="./assets/images/left-arrow.svg" alt="close modal"></img>
        <div class="name-number">
          <p class="name">${name}</p>
          <p class="number">${number}</p>
        </div>  
        <ol class="types">
          ${types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join("")}
        </ol>
        <img class="pokemon-image" src=${img} alt="${name}"></img>
      </div>        
      <div class="pokemon-about">
        <p>About</p>
        <table>
          <tr>
            <td class="first-column">Species</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td class="first-column">Height</td>
            <td>${height}</td>
          </tr>
          <tr>
            <td class="first-column">Weight</td>
            <td>${weight}</td>
          </tr>
          <tr>
            <td class="first-column">Abilities</td>
            <td>${abilities}</td>
          </tr>
        </table>
      </div>
      `;
}
