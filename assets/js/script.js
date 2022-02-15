var pageContentEl = document.querySelector("#page-content");
pageContentEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");

var timerEl = document.querySelector("#timer");

var timeLeft = 75;

var timeCountdown;


var countdown = function() {
    timeCountdown = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent= timeLeft;
            
           
        }else {
            clearInterval(timeCountdown);
            alert("You did not finish the quiz in time, your score is 0! Please try agian!")
            location.reload();          
        }
    }, 1000)
};



//function to start page
var startingPage = function() {
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
    var quizDescriptionEl = document.createElement("p");quizDescriptionEl.setAttribute("id", "quiz-description");
    quizDescriptionEl.textContent= ("Try to answer the following code related question within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!");
    quizInstructionsEl.appendChild(quizDescriptionEl);
    
    //create button to start quiz
    var buttonStartEl = document.createElement("button");
    buttonStartEl.setAttribute("id", "btn-start");
    buttonStartEl.className = ("btn btn-start");
    buttonStartEl.textContent= "Start Quiz";
    quizInstructionsEl.appendChild(buttonStartEl);

    // function that removes starting instructions and starts quiz 
    var startQuizButton = function() {
        countdown();
        quizInstructionsEl.remove();
        quizOne();
    }
    
    //event listener for when button is clicked to start quiz
    buttonStartEl.addEventListener("click", startQuizButton);
}


//function for first question
var quizOne = function() {
    //creat div container to hold questions and answer options
    var quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContainerEl);

    //question 1
    var questionOneEl = document.createElement("h1");
    questionOneEl.setAttribute("id", "question-one");
    questionOneEl.textContent = ("Commonly used data types DO NOT include:");
    quizContainerEl.appendChild(questionOneEl);

    //div for container to hold buttons
    var optionContainerEl = document.createElement("div");
    optionContainerEl.setAttribute("id", "options")
    quizContainerEl.appendChild(optionContainerEl);

    //options buttons
    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("correct-btn");
    optionOneEl.textContent = ("1. alerts");
    optionContainerEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("wrong-btn");
    optionTwoEl.textContent = ("2. strings");
    optionContainerEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("wrong-btn");
    optionThreeEl.textContent = ("3. booleans");
    optionContainerEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("wrong-btn");
    optionFourEl.textContent = ("4. numbers");
    optionContainerEl.appendChild(optionFourEl);

   

    optionContainerEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContainerEl.remove();
            alert("Correct Answer!");
            quizTwo();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContainerEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizTwo();
    }
    });
}

//function for second question
var quizTwo = function() {
    //creat div container to hold questions and answer options
    var quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContainerEl);

    //question 1
    var questionTwoEl = document.createElement("h1");
    questionTwoEl.setAttribute("id", "question-two");
    questionTwoEl.textContent = ("The condition in an if/else statement is enclosed with __________.");
    quizContainerEl.appendChild(questionTwoEl);

    //div for container to hold buttons 
    var optionContainerEl = document.createElement("div");
    optionContainerEl.setAttribute("id", "options")
    quizContainerEl.appendChild(optionContainerEl);

    //options buttons
    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("wrong-btn");
    optionOneEl.textContent = ("1. quotes");
    optionContainerEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("wrong-btn");
    optionTwoEl.textContent = ("2. curly brackets");
    optionContainerEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("wrong-btn");
    optionThreeEl.textContent = ("3. square brackets");
    optionContainerEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("correct-btn");
    optionFourEl.textContent = ("4. parantheses");
    optionContainerEl.appendChild(optionFourEl);

    optionContainerEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContainerEl.remove();
            alert("Correct Answer!");
            quizThree();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContainerEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizThree();
    }
    });
}

//function for third question
var quizThree = function() {
    //creat div container to hold questions and answer options
    var quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContainerEl);

    //question three
    var questionThreeEl = document.createElement("h1");
    questionThreeEl.setAttribute("id", "question-three");
    questionThreeEl.textContent = ("Arrays in JavaScript can be used to store __________.");
    quizContainerEl.appendChild(questionThreeEl);

    //div for container to hold buttons
    var optionContainerEl = document.createElement("div");
    optionContainerEl.setAttribute("id", "options")
    quizContainerEl.appendChild(optionContainerEl);

    //options buttons
    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("wrong-btn");
    optionOneEl.textContent = ("1. numbers and strings");
    optionContainerEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("wrong-btn");
    optionTwoEl.textContent = ("2. other arrays");
    optionContainerEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("wrong-btn");
    optionThreeEl.textContent = ("3. booleans");
    optionContainerEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("correct-btn");
    optionFourEl.textContent = ("4. all of the above");
    optionContainerEl.appendChild(optionFourEl);

    optionContainerEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContainerEl.remove();
            alert("Correct Answer!");
            quizFour();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContainerEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizFour();
    }
    });
}

//function for fourth question
var quizFour = function() {
    //creat div container to hold questions and answer options
    var quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContainerEl);

    //question four
    var questionFourEl = document.createElement("h1");
    questionFourEl.setAttribute("id", "question-four");
    questionFourEl.textContent = ("String values must be enclosed within __________ when being assigned to variables.");
    quizContainerEl.appendChild(questionFourEl);

    //div for container to hold buttons
    var optionContainerEl = document.createElement("div");
    optionContainerEl.setAttribute("id", "options")
    quizContainerEl.appendChild(optionContainerEl);

    //options buttons
    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("wrong-btn");
    optionOneEl.textContent = ("1. commas");
    optionContainerEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("correct-btn");
    optionTwoEl.textContent = ("2. quotes");
    optionContainerEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("wrong-btn");
    optionThreeEl.textContent = ("3. curly brackets");
    optionContainerEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("wrong-btn");
    optionFourEl.textContent = ("4. parantheses");
    optionContainerEl.appendChild(optionFourEl);

    optionContainerEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContainerEl.remove();
            alert("Correct Answer!");
            quizFive();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContainerEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizFive();
    }
    });
}

//function for fifth and final question
var quizFive = function() {
    //creat div container to hold questions and answer options
    var quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContainerEl);

    //question five
    var questionFiveEl = document.createElement("h1");
    questionFiveEl.setAttribute("id", "question-five");
    questionFiveEl.textContent = ("A very useful tool used during development and debugging for printing content to the debugger is:");
    quizContainerEl.appendChild(questionFiveEl);

    //div for container to hold buttons
    var optionContainerEl = document.createElement("div");
    optionContainerEl.setAttribute("id", "options")
    quizContainerEl.appendChild(optionContainerEl);

    //options buttons
    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("wrong-btn");
    optionOneEl.textContent = ("1. JavaScript");
    optionContainerEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("wrong-btn");
    optionTwoEl.textContent = ("2. terminal/git bash");
    optionContainerEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("correct-btn");
    optionThreeEl.textContent = ("3. console.log");
    optionContainerEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("wrong-btn");
    optionFourEl.textContent = ("4. for loops");
    optionContainerEl.appendChild(optionFourEl);

    optionContainerEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContainerEl.remove();
            finalScore=timeLeft;
            console.log(finalScore)
            alert("Correct Answer!");
            quizDone();
            
            
            // CALL FUNCTION HERE TO DISPLAY FINAL SCORE
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContainerEl.remove();
            timeLeft= timeLeft-10;
            finalScore= timeLeft;
            console.log(finalScore);
            alert("Wrong Answer!");
            quizDone();
            
            
    }
    });
}

//function for final score page
var quizDone = function() {
    /* timerEl.remove(); */
    finalScore= timeLeft;
    clearInterval(timeCountdown);

    //creat div container to hold score and form
    var quizDoneEl = document.createElement("div");
    quizDoneEl.setAttribute("id", "score-form");
    pageContentEl.appendChild(quizDoneEl);

    //all done message 
    var allDoneEl = document.createElement("h1");
    allDoneEl.setAttribute("id", "all-done");
    allDoneEl.textContent = ("All done!");
    quizDoneEl.appendChild(allDoneEl);

    //final score display
    var scoreEl = document.createElement("p");
    scoreEl.setAttribute("id", "score");
    scoreEl.innerHTML = "Your final score is " +finalScore + ".";
    quizDoneEl.appendChild(scoreEl);

    //div for form

    var formContainer = document.createElement("div");
    formContainer.setAttribute("id", "container-form");
    quizDoneEl.appendChild(formContainer);
    
    //label
    var formLabel = document.createElement("label");
    formLabel.setAttribute("for", "final-score");
    formLabel.textContent= "Enter your initials:";
    formContainer.appendChild(formLabel);
  
    //form input
    var formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("id", "initials")
    formInput.setAttribute("name", "initials");
    formContainer.appendChild(formInput);

    //button 
    var formButton = document.createElement("button");
    formButton.setAttribute("type", "submit");
    formButton.className=("btn form-button");
    formButton.textContent = ("Sumbit");
    formContainer.appendChild(formButton);
    
    var initials = document.querySelector("#initials");

    formButton.addEventListener("click", function(){
        localStorage.setItem("initials", initials.value);
        localStorage.setItem("score", finalScore);
        quizDoneEl.remove();
        //ADD FUNCTION HERE TO TAKE YOU TO HIGHSCORE PAGE FUNCTION
    })

}


startingPage();




















