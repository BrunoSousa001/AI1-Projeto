/**
 * Lógica do Slider Automático da Homepage.
 * Cumpre o requisito: "A imagem deve mudar de acordo com um intervalo de tempo".
 */

let slideIndex = 0; // Índice da imagem atual
let slides = document.getElementsByClassName("slides"); // Seleciona todas as imagens

// Inicia o ciclo
showSlides();

function showSlides() {
  let i;
  
  // 1. Esconde todas as imagens inicialmente
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // 2. Avança para a próxima imagem
  slideIndex++;
  
  // 3. Se chegar ao fim, volta à primeira imagem (Loop Infinito)
  if (slideIndex > slides.length) {slideIndex = 1}
  
  // 4. Mostra a imagem atual (ajuste de índice base-0)
  slides[slideIndex-1].style.display = "block";
  
  // 5. Agenda a próxima mudança para daqui a 5 segundos (5000ms)
  setTimeout(showSlides, 5000); 
}