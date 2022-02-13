var pageContentEl = document.querySelector("#page-content");

pageContentEl.setAttribute("style", "margin:auto; width:50%; text-align:center;")

//create div container to hold instructions start
var quizInstructionsEl = document.createElement("div");
quizInstructionsEl.setAttribute("id", "instructions");
pageContentEl.appendChild(quizInstructionsEl);

// create title for insturctions
var titleEl = document.createElement("h1");
titleEl.setAttribute("id", "title");
titleEl.textContent = ("Coding Quiz Challenge");
quizInstructionsEl.appendChild(titleEl);

// create instruction description
var quizDescriptionEl = document.createElement("p");
quizDescriptionEl.setAttribute("id", "quiz-description");
quizDescriptionEl.textContent= ("Try to answer the following code related question within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!");
quizInstructionsEl.appendChild(quizDescriptionEl);

//create button to start quiz
var buttonStartEl = document.createElement("button");
buttonStartEl.setAttribute("id", "btn-start");
buttonStartEl.className = ("btn btn-start");
buttonStartEl.textContent= "Start Quiz"
quizInstructionsEl.appendChild(buttonStartEl);