/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*let pronoun = ["their", "our"];
let adj = ["smart", "sassy"];
let noun = ["trex", "cicada"];

function generateLi(domain) {
  return "<li>" + domain + "</li>";
}

function generateDomains(pronounArr, adjArr, nounArr) {
  let storageArr = [];
  for (let i = 0; i < pronounArr.length; i++) {
    for (let j = 0; j < adjArr.length; j++) {
      for (let k = 0; k < nounArr.length; k++) {
        storageArr.push(pronounArr[i] + adjArr[j] + nounArr[k]);
      }
    }
  }
}
let arrayOfLiTags = storageArr.map(function(item, index) {
  return generateLi(item);
});

let result = arrayOfLiTags.join("");
return result;*/

function generateLi(domain) {
  return "<LI>" + domain + "</LI>";
}
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
// let extension = [".com", ".net", ".io", ".us"];
function generateDomains(pronounArr, adjArr, NounArr) {
  let storageArr = [];
  for (let i = 0; i < pronounArr.length; i++) {
    for (let j = 0; j < adjArr.length; j++) {
      for (let k = 0; k < NounArr.length; k++) {
        //for (let e = 0; e < extensionArr.length; e++) {
        storageArr.push(pronounArr[i] + adjArr[j] + NounArr[k]);
        //}
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
  const unorderedList = document.getElementById("list-of-domains");
  unorderedList.innerHTML = generateDomains(pronoun, adj, noun);
};

//1. Generate all domain combinations into an array of domains
//2. Take that array of domains and convert it to an array of <li></li> tags
//3. Concatenate all tags into a single string

/*window.onload = function() {
  //write your code here
  const unorderedList = document.getElementById("domains");
  unorderedList.innerHTML = generateDomains(pronoun, adj, noun);
  // for(let )
};*/
