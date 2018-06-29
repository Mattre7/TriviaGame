var correct = 0
var incorrect = 0
var incomplete = 0
var count = 60;
var intervalId;
var timerHeader;
var startBtn = $("<button class='start-btn'>")
startBtn.text("Click to Start!")
var inputwrapper = "<label class='choice'><input type='radio'>"
$(".maincontent").append(startBtn)
var submitBtn = $("<button class='submit-btn'>").text("Submit")

var trivia = [
    question1 = {
        question: "<h3>1.  What team is Lebron James going to go to?</h3>",
        correct: 0,
        choices: [inputwrapper + "Lakers" + "</label>", 
        inputwrapper + "Sixers" + "</label>", 
        inputwrapper + "Cavaliers" + "</label>", 
        inputwrapper + "Rockets" + "</label>",]
    },
    question2 = {
        question: "<h3>2. test question</h3>",
        correct: 0,
        choices: [inputwrapper + "Lakers" + "</label>", 
        inputwrapper + "Sixers" + "</label>", 
        inputwrapper + "Cavaliers" + "</label>", 
        inputwrapper + "Rockets" + "</label>",]
    },
    question3 = {
        question: "<h3>3. test question</h3>",
        correct: 0,
        choices: [inputwrapper + "Lakers" + "</label>", 
        inputwrapper + "Sixers" + "</label>", 
        inputwrapper + "Cavaliers" + "</label>", 
        inputwrapper + "Rockets" + "</label>",]
    },
    question4 = {
        question: "<h3>4. test question</h3>",
        correct: 0,
        choices: [inputwrapper + "Lakers" + "</label>", 
        inputwrapper + "Sixers" + "</label>", 
        inputwrapper + "Cavaliers" + "</label>", 
        inputwrapper + "Rockets" + "</label>",]
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

if (count === 0) {
    finish();
}
submitBtn.on("click", function () {
    finish();
})


startBtn.on("click", function () {
    startTimer();
    $(".maincontent").empty();
    var Q1area = $("<div>");
        $(".maincontent").append(Q1area);
        Q1area.append(question1.question);
        Q1area.append(question1.choices[0]).append(question1.choices[1]).append(question1.choices[2]).append(question1.choices[3]);
    var Q2area = $("<div>");
        $(".maincontent").append(Q2area);
        Q2area.append(question2.question)
        Q2area.append(question2.choices[0]).append(question2.choices[1]).append(question2.choices[2]).append(question2.choices[3])
    var Q3area = $("<div>");
        $(".maincontent").append(Q3area);
        Q3area.append(question3.question)
        Q3area.append(question3.choices[0]).append(question3.choices[1]).append(question3.choices[2]).append(question3.choices[3])
    var Q4area = $("<div>");
        $(".maincontent").append(Q4area);
        Q4area.append(question4.question)
        Q4area.append(question3.choices[0]).append(question4.choices[1]).append(question4.choices[2]).append(question4.choices[3])
    $(".maincontent").append(submitBtn)
     
})

if (question1.choices[0].val(true)) {
    question1.choices[1].val('checked', false);
    question1.choices[2].val('checked', false);
    question1.choices[3].val('checked', false);
}



//psuedo code because I may not have enough time to finish

//if/else statements so that only one answer may be selected
// find out what syntax to use to check the value of the radio input buttons

// create a finish function so that after the submit button is clicked, or when the timer ends, the results can be seen
// if the checked answer matches the correct answer
// add +1 to the correct answers variable
// if it is incorrect do the same for the incorrect variable

