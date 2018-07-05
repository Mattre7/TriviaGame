var correct = 0
var incorrect = 0
var incomplete = 0
var count = 60;
var intervalId;
var timerHeader;
var answersChosen = [];
var startBtn = $("<button class='start-btn'>")
startBtn.text("Click to Start!")
var inputwrapper = "<label class='choice'><input type='radio'"
var Q1ans = "name = 'Q1ans'"
var Q2ans = "name = 'Q2ans'"
var Q3ans = "name = 'Q3ans'"
var Q4ans = "name = 'Q4ans'"

$(".maincontent").append(startBtn)
var submitBtn = $("<button class='submit-btn'>").text("Submit")

var trivia = [
    question1 = {
        question: "<h3>1.  What team is Lebron James going to?</h3>",
        correct: 0,
        choices: [inputwrapper + Q1ans + "id=q1correct>" + "Lakers" + "</label>", 
        inputwrapper + Q1ans + ">Sixers" + "</label>", 
        inputwrapper + Q1ans + ">Cavaliers" + "</label>", 
        inputwrapper + Q1ans + ">Rockets" + "</label>"]
    },
    question2 = {
        question: "<h3>2. What team is DeMarcus Cousins going to?</h3>",
        correct: 2,
        choices: [inputwrapper + Q2ans + ">Pelicans" + "</label>", 
        inputwrapper + Q2ans + ">Lakers" + "</label>", 
        inputwrapper + Q2ans + "id=q2correct>" + "Warriors" + "</label>", 
        inputwrapper + Q2ans + ">Blazers" + "</label>"]
    },
    question3 = {
        question: "<h3>3. Who else has committed to joining the Los Angeles Lakers in the upcoming 2018 season?</h3>",
        correct: 3,
        choices: [inputwrapper + Q3ans + ">Kyrie Irving" + "</label>", 
        inputwrapper + Q3ans + ">Kawhi Leonard" + "</label>", 
        inputwrapper + Q3ans + ">Jimmy Butler" + "</label>", 
        inputwrapper + Q3ans + "id=q3correct>" +"Rajon Rondo" + "</label>"]
    },
    question4 = {
        question: "<h3>4. Fill in the blank (from a Laker fan's perspective) ``____ SUCKS``<h3>",
        correct: 1,
        choices: [inputwrapper + Q4ans + ">Houston" + "</label>", 
        inputwrapper + Q4ans + "id=q4correct>" + "Boston" + "</label>", 
        inputwrapper + Q4ans + ">Cleveland" + "</label>", 
        inputwrapper + Q4ans + ">Oakland" + "</label>"]
    },
]


function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
}

function countdown() {
    count--;
    timerHeader = $("<h1 class='timer'>").text("Timer: " + count + " sec");
    $(".timersection").html(timerHeader);
    if (count === 0) { 
        finish();
    }
}

function finish() {
    $(".maincontent").empty();
    timerHeader.text("Finish!")
    clearInterval(intervalId);
    var correctAnswers = $("<h3>").text("Questions answered correctly: " + correct);
    var incorrectAnswers = $("<h3>").text("Questions answered incorrectly: " + incorrect);
    var incompleteAnswers = $("<h3>").text("Questions left unanswered: " + incomplete);
    $(".maincontent").append(correctAnswers, incorrectAnswers)
    if (incomplete !== 0) {
        $(".maincontent").append(incompleteAnswers)
    }
}


submitBtn.on("click", function () {
    if ($("#q1correct").is(':checked')) {
        correct ++;
    }
    else {
        incorrect ++;
    }
    
    if ($("#q2correct").is(':checked')) {
        correct ++;
    }
    else {
        incorrect ++;
    }
    
    if ($("#q3correct").is(':checked')) {
        correct ++;
    }
    else {
        incorrect ++;
    }
    
    if ($("#q4correct").is(':checked')) {
        correct ++;
    }
    else {
        incorrect ++;
    }
    finish();
})


startBtn.on("click", function () {
    timerHeader = $("<h1 class='timer'>").text("Timer: 1 min");
    $(".timersection").html(timerHeader);
    startTimer();
    $(".maincontent").empty();
    var Q1area = $("<div class='questarea'>");
        $(".maincontent").append(Q1area);
        Q1area.append(question1.question);
        Q1area.append(question1.choices[0]).append(question1.choices[1]).append(question1.choices[2]).append(question1.choices[3]);
    var Q2area = $("<div class='questarea'>");
        $(".maincontent").append(Q2area);
        Q2area.append(question2.question)
        Q2area.append(question2.choices[0]).append(question2.choices[1]).append(question2.choices[2]).append(question2.choices[3])
    var Q3area = $("<div class='questarea'>");
        $(".maincontent").append(Q3area);
        Q3area.append(question3.question)
        Q3area.append(question3.choices[0]).append(question3.choices[1]).append(question3.choices[2]).append(question3.choices[3])
    var Q4area = $("<div class='questarea'>");
        $(".maincontent").append(Q4area);
        Q4area.append(question4.question)
        Q4area.append(question4.choices[0]).append(question4.choices[1]).append(question4.choices[2]).append(question4.choices[3])
    $(".maincontent").append(submitBtn)
     
})


//psuedo code because I may not have enough time to finish

//if/else statements so that only one answer may be selected
// find out what syntax to use to check the value of the radio input buttons

// create a finish function so that after the submit button is clicked, or when the timer ends, the results can be seen
// if the checked answer matches the correct answer
// add +1 to the correct answers variable
// if it is incorrect do the same for the incorrect variable

