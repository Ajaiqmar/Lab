const commands = {"Hey dad":function(){},"open yahoo":function(){},"open youtube":function(){},"open google":function(){},
                    "bunny":function(){},"Describe dinesh":function(){},"Describe deviprasad":function(){},"Describe ajay":function(){}};

annyang.addCallback('resultMatch', function(userSaid, commandText, phrases){
  if(commandText === "Hey dad")
  {
    const speech = new SpeechSynthesisUtterance("Welcome Home, Boss");
    window.speechSynthesis.speak(speech);
    stopInterpreting();
  }
  else if(commandText === "open google")
  {
    window.open("https://www.google.com/");
    stopInterpreting();
  }
  else if(commandText === "open yahoo")
  {
    window.open("https://in.search.yahoo.com/?fr2=inr");
    stopInterpreting();
  }
  else if(commandText === "open youtube")
  {
    window.open("https://www.youtube.com/");
    stopInterpreting();
  }
  else if(commandText === "Describe dinesh")
  {
    const speech = new SpeechSynthesisUtterance("Nah! Waste of time. See for yourself.");
    window.speechSynthesis.speak(speech);
    location.href = "https://cdn.mos.cms.futurecdn.net/6h8C6ygTdR2jyyUxkALwsc-970-80.jpg.webp";
    stopInterpreting();
  }
  else if(commandText === "Describe deviprasad")
  {
    const speech = new SpeechSynthesisUtterance("You know what, I got the right one for it.");
    window.speechSynthesis.speak(speech);
    location.href = "https://qphs.fs.quoracdn.net/main-qimg-88f5ec03d2076b58558c2f423bf2ab3b.webp";
    stopInterpreting();
  }
  else if(commandText === "Describe ajay")
  {
    const speech = new SpeechSynthesisUtterance("Class A Narcissist. I haven't seen him but i have heard that that piece of shit is like 6 feet tall.");
    window.speechSynthesis.speak(speech);
    stopInterpreting();
  }
  else if(commandText === "bunny")
  {
    const speech = new SpeechSynthesisUtterance("Keep Smiling Dumbo!");
    window.speechSynthesis.speak(speech);
    stopInterpreting();
  }
});
annyang.addCommands(commands);
annyang.start();
annyang.pause();

function interpret()
{
  annyang.resume();
}

function stopInterpreting()
{
  annyang.pause();
}
