const yearsExperience = document.getElementById("years-experience");
const workingSince = document.getElementById("working-since");

const startYear = 2022;

workingSince.textContent = `I’ve been building since ${startYear}`;
yearsExperience.textContent = new Date().getFullYear() - startYear;
