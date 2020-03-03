
    
    
    
    
    //This function is for wrong answers 
    
    
    
    
    
    
    //This is the function for the timer
    
    
    
   
   //This function is to run through the questions
   let start = document.getElementById("random-button")
   let questionCon = document.getElementById("container")
   let questionElement = document.getElementById("question-text")
   let answerButtons = document.getElementById("question-answers")
   let currentQuestion = 0
   let totalTime = 300
   let penaltyTime = 30 
   let scoreOnScreen = document.getElementById('score')
   let score = 0
   let questionNumberOnScreen = document.getElementById('questionNumber')
   let questionNumber = 1

   function renderSpans(){
       questionNumberOnScreen.innerHTML = questionNumber
       scoreOnScreen.innerHTML = score
   }

renderSpans()
   
   let questions = [
       {
           question: "What is Iron man's real name?" , 
           answers:{ 
               a: "Bruce Wayne", 
               b: "Reed Richards",
               c: "Tony Stark"
            },
            rightAnswer: "c"
        },
        { 
            question: "Is Superman human?",
            answers: {
                a: "Yes", 
               b: "No", 
           }, 
           rightAnswer: "b"
       },
       { 
           question: "Which comicbook universe is Peter Parker from?", 
           answers: {
               a: "Marvel",
               b: "DC", 
               c: "Dark horse comics"
           }, 
           rightAnswer: "a"
        
        },
       { 
           question: "Who is Batman's greatest enemy?",
            answers: {
                a: "Dr.Doom",
                b: "Joker",
                c: "Rorschach"
            }, 
            rightAnswer: "b"
        },
       { 
           question: "Is Wonder Woman Awesome?",
           answers: {
               a: "Hell Yes", 
               b: "No"
           }, 
           rightAnswer: "a"
        
        }
    ]
    function renderQuestion (){
        questionElement.innerHTML= "" 
        answerButtons.innerHTML = "" 
        questionElement.innerHTML = questions[currentQuestion].question

        var keys = Object.keys(questions[currentQuestion].answers)

        for(i=0; i< keys.length; i++) {
            questionElement.innerHTML
        }

        for(i = 0; i < keys.length; i++ ) { 
            if(keys[i] == questions[currentQuestion].rightAnswer) {
                answerButtons.innerHTML += '<button type="button" data-correct="true" class="btn btn-primary">'+questions[currentQuestion].answers[keys[i]]+'</button>'
            } else (
                answerButtons.innerHTML += '<button type="button" class="btn btn-primary">'+questions[currentQuestion].answers[keys[i]]+'</button>' 
            )    
        }
    }


    
    function answerQuestion(event) { 
        if(event.target.matches("button")) {
            if (event.target.getAttribute("data-correct")){
                score += 10
            } else {
                alert('no dummy')
            }
            currentQuestion++
            questionNumber++
            renderQuestion()
            renderSpans()
        }


    }




    questionCon.addEventListener("click", answerQuestion)

    renderQuestion()

    

             
   // questions.forEach(element => console.log(element));


   // console.log(questions)
    
    /*
    Refer back to JS fiddle for this section

    function runQuestions() { 
        
        var questionText = document.getElementById('question-text')
        question-text.innerHTML = ""

        for(var i = 0; questions.length; i++)

        }


    }
    
    
    
    //This function is to display my highscores
    
    $("#random-button").on('click', function () {
        var display = ''
        for (i = 0; i < 9; i++) {
            display += Math.floor(Math.random() * 10)
        }
        var divEl = `<div> ${display} </div>`
        $("#high-Scores").prepend(divEl);
        
        
    })
    
     this function is to add my highscores to local storage 
    
    var scores = localStorage.getItem("#high-scores")
    
    addButton.addEventListener("click", function () {
        scores++;
        counter.textContent = count;
        
        localStorage.setItem("count", count);
    });
    
    
})
   */
