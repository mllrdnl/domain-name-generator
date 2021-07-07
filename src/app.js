/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["their", "our"];
let adj = ["smart", "sassy"];
let noun = ["trex", "cicada"];
let extension = [".com", ".me"];

function generateLi(domain) {
  return "<li>" + domain + "</li>";
}

function generateDomains(pronounArr, adjArr, nounArr, extensionArr) {
  let storageArr = [];
  for (let i = 0; i < pronounArr.length; i++) {
    for (let j = 0; j < adjArr.length; j++) {
      for (let k = 0; k < nounArr.length; k++) {
        for (let l = 0; l < extensionArr.length; l++) {
          storageArr.push(
            pronounArr[i] + adjArr[j] + nounArr[k] + extensionArr[l]
          );
        }
      }
    }
  }
  let arrayOfLiTags = storageArr.map(function(item, index) {
    return generateLi(item);
  });

  let result = arrayOfLiTags.join("");
  return result;
}
window.onload = function() {
  const unorderedList = document.getElementById("domains");
  unorderedList.innerHTML = generateDomains(pronoun, adj, noun, extension);
};
