<template>
    <div class="wrapper">
        <h1>Inspiration from Kanye</h1>
        <img src="images/Kanye-West.jpg">
        <div v-on:click="getQuote" class="button">New Quote</div>
        <h2>{{quote}}<br><br>--Kayne West</h2>
    </div>
</template>

<script>

export default {
    name:'KanyeView',
    
    data() {
        return {
            kanyeQuote: "",
        }
    },
    created() {
        this.fetchQuote(this);
    },
    methods: {
        fetchQuote() {
            this.fetchQuoteHelper(this);
        },
        fetchQuoteHelper(vm) {
            const url = "https://api.kanye.rest";
            fetch(url)
            .then(function(response){
                return response.json();
            }).then(function(json){
                function isClean(quote) {
                    if(quote.includes("fuck") || quote.includes("shit") || quote.includes("sex") || quote.includes("porn"))
                        return false;
                    return true;
                }
                if(vm.kanyeQuote === json.quote || !isClean(json.quote))
                    vm.fetchQuote();
                else{
                    vm.kanyeQuote = json.quote;
                }
            });
        },
        getQuote() {
            this.$root.$data.numButtonsClicked++;
            this.fetchQuote();
        },
    },
    computed: {
        quote() {
            return `"${this.kanyeQuote}"`;
        }
    },
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.wrapper img {
    width: 325px;
    height: 325px;
}
.wrapper h1 {
    font-size: 60px;
    margin: 35px;
}
.wrapper h2 {
    max-width: 60%;
    font-style: italic;
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

.button:hover {
    background-color: gray;
}

.button:active {
    background-color: black;
}

@media (max-width: 450px) {

    .wrapper h1 {
        font-size: 30px;
        margin: 15px;
    }

    .wrapper img {
        width: 200px;
        height: 200px;
    }

    .wrapper h2 {
        max-width: 95%;
        font-size: 25px;
    }

    .button:hover {
        background-color: black;
    }

    .button:active {
    background-color: gray;
    }
}
</style>
