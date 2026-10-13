var inhaltTabelle = {
  bild:[
    "bilder/baustelle.png",
    "bilder/oligarchie.jpg"
  ],
  titel:[
    "Baustelle<br><div style='font-size:10pt;'>Was kommen wird</div>",
    "Oligarchie<br><div style='font-size:10pt;'>Die Kinderkrankheit in Parteien</div>"
  ],
  beschreibung:[
    "Was Nun?<br>Wie geht es weiter?<br>Auf was könnt ihr euch gefasst machen?<br>Was brauchen wir?<br>Und wie kannst du dabei helfen?",
    "Eine Seuche treibt sich auf Erden, die alle Parteien im Moment ihrer Gründung infiziert – Partaitae Oligarchikus. Jeder Erkrankte muss mit organisatorischen, anti-demokratischen und ernsten Folgen leben. Lass uns die Ärzte sein, die diese Seuche in seinem Kern studieren, die Arznei vergeben und sie aus Erden ausrotten"
  ],
  datum:[
    "13. Oktober 2026",
    "Mai 2026"
  ],
//Absolut notwendig den Text so zu schreiben: "'text'"
  link:[
    "'baustelle/index.html'",
    "'oligarchie/index.html'"
  ]
}

// Nutze die Variabel line, um es leserlicher zu machen
var line = "";
document.getElementById("artikelliste").innerHTML = '';
for(let i = 0; i < inhaltTabelle.titel.length; i++){
    line = "";
    line += '<button onclick="window.location.href='+inhaltTabelle.link[i]+'">';
    line += ' <span>';
    line += '  <img id="artikelbild" src="'+inhaltTabelle.bild[i]+'">';
    line += '  <h3 id="artikeltitel">'+inhaltTabelle.titel[i]+'</h3>';
    line += '  <p id="artikeltext">'+inhaltTabelle.beschreibung[i]+'</p>';
    line += '  <span id="artikeldatum">';
    line += '  <p>'+inhaltTabelle.datum[i]+'</p>';
    line += '  </span>'
    line += ' </span>';
    line += '</button>';
    line += '<br>';
    document.getElementById("artikelliste").innerHTML += line;
}
