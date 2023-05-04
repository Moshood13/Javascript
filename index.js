//the quotes used are extracted from freecodecamp project "Random quote machine" 

var currentQuote = '';
var currentAuthor = '';
var quoteBank = [{
    "quote":"The mind is everything. What you think you become.",
    "author":"Kevin Kruse"},
{
    "quote":"Whatever the mind of man can conceive and believe, it can achieve.",
    "author":"Napoleon Hill"},
{
    "quote":"Strive not to be a success, but rather to be of value.",
    "author":"Albert Einstein"},
{
    "quote":"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
    "author":"Robert Frost"},
{
    "quote":"I attribute my success to this: I never gave or took any excuse.",
    "author":"Florence Nightingale"},
{
    "quote":"We must balance conspicuous consumption with conscious capitalism.",
    "author":"Kevin Kruse"},
{
    "quote":"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    "author":"Plato"},
{
    "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.",
    "author":"Amelia Earhart"},
{
    "quote":"Every strike brings me closer to the next home run.",
    "author":"Babe Ruth"},
{
    "quote":"Definiteness of purpose is the starting point of all achievement.",
    "author":"W. Clement Stone"},
]
 var color = [
    "#00ffff",
    "#0000ff",
    "#8a2be2",
    "#deb887",
    "#d2691e",
    "#00008b",
    "#a9a9a9",
    "#556b2f",
    "#483d8b",
    "#2f4f4f"
];
 
function getRandomQuote() {
    return quoteBank[(Math.floor(Math.random() * quoteBank.length))];
} 
 function getNewQuote() {
    let randomQuote = getRandomQuote();

    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
    encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
    $('#quote-text').animate({width: 'toggle'}, 2000, function() {
    $(this).animate({width: 'toggle'}, 2000);
    $('#text').text(randomQuote.quote);
 });
 $('#quote-author').animate({width: 'toggle'}, 2000, function() {
    $(this).animate({width: 'toggle'}, 2000);
    $("#author").text(randomQuote.author)
 });
 var colors = Math.floor(Math.random() * color.length);
 $('.btn').animate({
    backgroundColor: color[colors]

 }, 1000);
 $('html body').animate({
    backgroundColor: color[colors],
    color: color[colors]
 },1000);
}

$(document).ready(function() {
    getNewQuote().then(() => {
        getNewQuote();
    });
    $('#new-quote').on('click', getNewQuote);
});

//the quotes used are extracted from freecodecamp project "Random quote machine" 

var currentQuote = '';
var currentAuthor = '';
var quoteBank = [{
    "quote":"The mind is everything. What you think you become.",
    "author":"Kevin Kruse"},
{
    "quote":"Whatever the mind of man can conceive and believe, it can achieve.",
    "author":"Napoleon Hill"},
{
    "quote":"Strive not to be a success, but rather to be of value.",
    "author":"Albert Einstein"},
{
    "quote":"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
    "author":"Robert Frost"},
{
    "quote":"I attribute my success to this: I never gave or took any excuse.",
    "author":"Florence Nightingale"},
{
    "quote":"We must balance conspicuous consumption with conscious capitalism.",
    "author":"Kevin Kruse"},
{
    "quote":"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    "author":"Plato"},
{
    "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.",
    "author":"Amelia Earhart"},
{
    "quote":"Every strike brings me closer to the next home run.",
    "author":"Babe Ruth"},
{
    "quote":"Definiteness of purpose is the starting point of all achievement.",
    "author":"W. Clement Stone"},
]
 var color = [
    "#00ffff",
    "#0000ff",
    "#8a2be2",
    "#deb887",
    "#d2691e",
    "#00008b",
    "#a9a9a9",
    "#556b2f",
    "#483d8b",
    "#2f4f4f"
];
 
function getRandomQuote() {
    return quoteBank[(Math.floor(Math.random() * quoteBank.length))];
} 
 function getNewQuote() {
    let randomQuote = getRandomQuote();

    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
    encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
    $('#quote-text').animate({width: 'toggle'}, 2000, function() {
    $(this).animate({width: 'toggle'}, 2000);
    $('#text').text(randomQuote.quote);
 });
 $('#quote-author').animate({width: 'toggle'}, 2000, function() {
    $(this).animate({width: 'toggle'}, 2000);
    $("#author").text(randomQuote.author)
 });
 var colors = Math.floor(Math.random() * color.length);
 $('.btn').animate({
    backgroundColor: color[colors]

 }, 1000);
 $('html body').animate({
    backgroundColor: color[colors],
    color: color[colors]
 },1000);
}

$(document).ready(function() {
    getNewQuote().then(() => {
        getNewQuote();
    });
    $('#new-quote').on('click', getNewQuote);
});