module.exports = { getCards };

function getCards(db, level) { 
    let cards = [];
    if (db === 'friends') { 
        if (level === 3) { 
            cards = friendsCards.levelThree
        } else if (level === 2) { 
            cards = friendsCards.levelTwo;
        } else { // levelOne + catch all
            cards = friendsCards.levelOne;
        }
    } else if (db === 'dating') { 
        if (level === 3) {
            cards = datingCards.levelThree;
        } else if (level === 2) {
            cards = datingCards.levelTwo;
        } else { // levelOne + catch all
            cards = datingCards.levelOne;
        }
    } 
    return cards;
} 

const friendsCards = {
    levelOne: [
        "What is your most prized possession?",
        "What do you like but are embarrassed to admit?",
        "If you found $10,000 right now and had to spend it by the end of the day, what would you spend it on?",
        "What's your favorite quote or saying?",
        "What's the best present you ever received?",
        "If you started a business, what type of business would it be?",
        "What would you do with the extra time if you never had to sleep?",
        "If you could start a habit and it would stick immediately, what would it be?",
        "What is your worst habit?",
        "What's on your bucket list this year?",
        "If you could pick a tattoo for me, what would it be?",
        "If you could instantly receive a Ph.D. in any discipline, what would it be in?",
        "What do you never get tired of?",
    ],
    levelTwo: [
        "What's the most essential part of a friendship?",
        "What is your most favorite memory?",
        "What are your top 3 favorite things to talk about?",
        "What do you fear most?",
        "What do you miss about life 10 years ago?",
        "What embarrasses you most?",
        "What do you do when no one else is around?",
        "What's the best way to get to know who someone really is?",
        "What is something you think everyone should try at least once?",
        "What's the worst advice someone has given to you?",
        "What would you do if you have enough money to not need a job?",
        "What are you most grateful for?",
        "What are some accomplishments that you are really proud of?",
        "When you were a kid, what seemed like the best thing about being a grown up?",
        "What is one dream you have yet to accomplish?",
        "What's your philosophy in life?",
        "What is something you wouldn’t want to change about yourself?",
        "What was the last thing that made you really happy?",
        "What’s the best compliment a stranger has ever given you?",
    ],
    levelThree: [
        "When do you feel most out of place?",
        "What are the top three social situations you try to avoid the most?",
        "What were some of the happiest times of your life so far?",
        "If you knew you were going to die in a year, what would you change about how you live?",
        "What small things brighten up your day when they happen?",
        "What are you still trying to prove to yourself?",
        "Do you have any regrets?",
        "If you could change one thing about yourself, what would it be?",
        "If you could send one letter to yourself in the pass without the goal of making yourself rich, what would you say?",
        "If you could give everyone just one piece of advice, what would it be?",
        "What small seemingly insignificant decision had a massive impact on your life?",
        "What would your younger self not believe about your life today?",
        "What is a dream you've let go of?",
        "What is a questions you're afraid to answer?",
        "What question are you trying to answer most in your life right now?",
    ],
}

const datingCards = {
    levelOne: [
        "If you never had to work for the rest of your life, what would you do?",
        "What's your favorite thing to do outdoors?",
        "What's your favorite thing to do indoors?",
        "How would you describe yourself?",
        "Who are your kind of people?",
        "Among your friends, what are you best known for?",
        "What are you most passionate about?",
        "Where do you see yourself in five years?",
    ],
    levelTwo: [
        "What was your first impression of me?",
        "Whats the first thing you noticed about me?",
        "Describe your perfect date.",
        "What's the most essential part of a relationship?",
        "What's a deal breaker for you in a relationship?",
        "What are three things you value most about a person?",
        "What about me most surprised you?",
        "What are the three things most important to you?",
    ],
    levelThree: [
        "What is your love language?",
        "How does one earn your trust?",
        "How would you describe being in love?",
        "When are you the most 'you' that you can be?",
        "Do you believe in second chances?",
    ],
}