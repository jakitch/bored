<template>
    <div class="wrapper">
        <h1>Death Quiz</h1>
        <img id="quizImg" v-if="!failedQuiz" src="images/Skull.png">
        <img id="deathImg" v-if="failedQuiz" src="images/Flame.png">
        <h2 v-if="!quizBegun" class="question">Answer a question wrong and you die.</h2>
        <h2 v-if="quizBegun" class="question">{{currentQuestion}}</h2>
        <div v-if="!quizBegun" v-on:click="beginQuiz" class= "button">Begin Quiz</div>
        <div v-if="failedQuiz" v-on:click="reset" class= "button">Retry?</div>
        <div v-if="completedQuiz" v-on:click="reset" class= "button">Play Again?</div>
        <div v-if="quizBegun && !failedQuiz && !completedQuiz" class="button-container">
            <div v-on:click="checkAnswer(true)" class="quizButton">True</div>
            <div v-on:click="checkAnswer(false)" class="quizButton">False</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizView',

    data() {
        return {
            quizBegun: false,
            failedQuiz: false,
            completedQuiz: false,
            question: "",
            answer: false,
            questionList: this.$root.$data.questions,
            questionIndex: -1,
        }
    },

    methods: {
        shuffleQuestions() {

            for (let i = this.questionList.length - 1; i > 0; i--) {

                let j = Math.floor(Math.random() * (i + 1));
                let temp = this.questionList[i];
                this.questionList[i] = this.questionList[j];
                this.questionList[j] = temp;
            }
        },
        selectQuestion() {
            const nextQuestion = this.questionList[++this.questionIndex];
            this.question = nextQuestion.question;
            this.answer = nextQuestion.answer;
        },
        beginQuiz() {
            this.$root.$data.numButtonsClicked++;
            this.quizBegun = true;
            this.shuffleQuestions();
            this.selectQuestion();  
        },
        checkAnswer(userAnswer) {
            this.$root.$data.numButtonsClicked++;
            if(this.answer === userAnswer) {
                console.log(this.questionIndex)
                if(this.questionList.length === this.questionIndex + 1) {
                    this.question = "YOU SURVIVED!!!";
                    this.completedQuiz = true;
                }
                else 
                    this.selectQuestion();
            }
            else {
                this.question = "YOU DIED!!!";
                this.failedQuiz = true;
            }
        },
        reset() {
            this.questionIndex = -1;
            this.$root.$data.numButtonsClicked++;
            this.quizBegun = true;
            this.failedQuiz = false;
            this.completedQuiz = false;
            this.shuffleQuestions();
            this.selectQuestion();
        }
    },
    computed: {
        currentQuestion() {
            return this.question;
        },
    }
}
</script>

<style scoped>
    .wrapper {
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    #quizImg {
        width: 449px;
        height: 400px;
    }
    #deathImg {
        width: 400px;
        height: 400px;
    }
    .button {
        user-select: none;
        cursor: pointer;
        font-size: 20px;
        background-color: black;
        border-radius: 10px;
        border: 3px solid white; 
        padding: 0.3em;
        width: 150px;
        margin: 25px;
        color: white;
    }
    .button-container{
        display: flex;
        justify-content: center;
    }
    .quizButton {
        user-select: none;
        cursor: pointer;
        font-size: 20px;
        background-color: black;
        border-radius: 10px;
        border: 3px solid white; 
        padding: 0.3em;
        width: 100px;
        margin: 25px 10px;
        color: white;
    }
    .button:hover {
        background-color: gray;
    }

    .button:active {
        background-color: black;
    }

    .wrapper h1 {
        font-size: 60px;
        margin: 35px;
    }
    .wrapper h2 {
        margin: 30px;
        font-size: 40px;
    }

    @media (max-width: 450px) {

        .button:hover {
                background-color: black;
        }

        .button:active {
            background-color: gray;
        }

        #quizImg {
            width: 337px;
            height: 300px;
        }
        #deathImg {
            width: 300px;
            height: 300px;
        }
        .wrapper h1 {
            font-size: 45px;
            margin: 15px;
        }
        .wrapper h2 {
            font-size: 25px;
            margin: 10px;
        }

        .button {
            margin: 10px;
        }
}
</style>
