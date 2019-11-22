function randQuote() {
	var quotes = [
        {
          text: "\"\'Why should I care it\'s the internet,\' - Some random guy\"",
          name: "u/BeefyBread"
        },
        {
          text: "\"Hi eminem pleas come 2 india you are best raper\"",
          name: "u/Microwaved_hamster"
        },
        {
          text: "\"What is the bigger number THREE OR ONE\"",
          name: "u/newmanusc"
        },
        {
          text: "\"Fun fact. Frogs make a loud pop noise when you run them over.\"",
          name: "u/WeirdAvocado"
        },
        {
          text: "\"Work your slaves so hard people think the aliens did it\"",
          name: "u/whistles13"
        },
        {
          text: "\"McExistentialCrisis\"",
          name: "u/LECAGO"
        },
        {
          text: "\"I love russian roulette, only one winner\"",
          name: "u/poelseskideren27"
        },
        {
          text: "\"\'Threat\' is such an ugly word. Think of it more as some good advice.\"",
          name: "u/Zomburai"
        },
        {
          text: "\"I\'d feel grieved if you DIDNT teabag me\"",
          name: "u/Turd_Fergunson883"
        },
        {
          text: "\"Yo imagine you\'re working one day and you see a plane hurtling towards you and as you look closer it\'s Alvin and the chipmunks singing the ISIS themesong in thier chipmunk voices\"",
          name: "u/FudgeSlapp"
        },
        {
          text: "\"A nuclear bomb can kill all kinds of cancers too.\"",
          name: "u/abrachoo"
        },
        {
          text: "\"Fun Fact: Whenever there's an earthquake, coffins temporarily become maracas\"",
          name: "-Anonymous"
        },
        {
          text: "\"baby yoda implies the existence of yoda sex\"",
          name: "@AbbieEvansX0"
        },
        {
          text: "\"Can I name my child Minecraft?\"",
          name: "u/ElPapo131"
        },
        {
          text: "\"My ex-wife also really loved the garbage man\"",
          name: "-Ima Nalien"
        },
        {
          text: "\"Anyone remeber when the U.S. dropped two Nokia 3310s on Japan?\"",
          name: "-Pippy"
        },
        {
          text: "\"You know what I hate more than the COPPA update on YouTube? Kids. I make YouTube videos and I absolutely cannot stand those little monstrous gremlin snots if I see a child watching my videos I will punt thier tiny body and watch it ragdoll over the horizon\"",
          name: "@Slimecicle"
        },
        {
          text: "\"I bet baby yoda would taste good grilled\"",
          name: "u/THEcrappyArtist2003"
        },
        {
          text: "\"I pixelated my penis to stay pure until marriage, but now I don't know how to get rid of it.\"",
          name: "u/AllergicToStabWounds"
        },
        {
          text: "\"Thanked a rival dad at the neighborhood chili cook off for making his mild so my kids could have some.\"",
          name: "@simoncholland"
        },
        {
          text: "\"Aint clitoris that big ass red dog\"",
          name: "-Anonymous"
        },
        {
          text: "\"Thanked a rival dad at the neighborhood chili cook off for making his mild so my kids could have some.\"",
          name: "@simoncholland"
        },
        {
          text: "\"For a brief moment in 2006 I was the oldest teenager in the world.\"",
          name: "@tweetsauce"
        },
        {
          text: "\"On the bright side they finally killed Jack Paul\"",
          name: "u/yaboilordthiccc"
        },
        {
          text: "\"My Uber eats driver is f***ing walking over\"",
          name: "@mike_shakes"
        },
        {
          text: "\"decided i will no longer be paying taxes. what are they gonna do, tax me more? go ahead. i won't pay those either. oh i'm going to prison? the one paid for by my tax dollars? sorry, didn't pay 'em. now i am atleast 3 steps ahead of the government at all times\"",
          name: "@im_your_destiny"
        },
        {
          text: "\"if your grave doesnt say 'rest in peace' on it you are automatically drafted into the skeleton war\"",
          name: "@dril"
        },



      ];

    var quote = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quote").innerHTML = quote.text;
   	document.getElementById("name").innerHTML = quote.name;
   	document.getElementById("count").innerHTML = quotes.length;
}


