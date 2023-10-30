let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML += document.lastModified;
document.getElementById("currentyear").innerHTML = oLastModif.getFullYear();