function say()
{
  const speech = new SpeechSynthesisUtterance(document.getElementById("floatingInput").value);
  speechSynthesis.speak(speech);
  location.href="index.html";
}
