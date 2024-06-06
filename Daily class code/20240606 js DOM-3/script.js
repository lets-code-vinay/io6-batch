/**
 *  -0-----Query Selector ---
 *
 *  querySelector --> Returns only one element which got found at first,Whether it is tag or class
 *  querySelectorAll --> Returns the array of all found elements by tagName or className
 *
 *  document.querySelector('input')
 *
 *
 */

const inputs1 = document.getElementsByTagName("input");
console.log("inputs--", inputs1);

const button2 = document.querySelectorAll("button");
console.log("button fromQS--", button2);

const abcClassByGetEle = document.getElementsByClassName("abc");
console.log("abcClassByGetEle--", abcClassByGetEle);

const abcClassByQS = document.querySelectorAll(".abc");
console.log("abcClassByQS--", abcClassByQS);

const themeBtnByGetEle = document.getElementById("theme-btn");
console.log("themeBtnByGetEle--", themeBtnByGetEle);

const themeBtnByQS = document.querySelector("#theme-btn");
console.log("themeBtnByQS--", themeBtnByQS);
