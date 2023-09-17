import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentSubRoot: string | undefined;

  booksInLibrary : any = [
]

  bookList: any = [
    ['OL14048034M', '/works/OL863807W', false, null, 0],
    ['OL8057372M', '/works/OL8088744W', false, null, 1],
    ['OL34567342M', '/works/OL5846465W', false, null, 2],
    ['OL10277228M', '/works/OL60359W' , false, null, 3],
    ['OL24657215M', '/works/OL20170W' , false, null, 4],
    ['OL6478450M', '/works/OL880131W' , false, null, 5],
    ['OL7243618M', '/works/OL2346083W', false, null, 6],
    ['OL6474423M', '/works/OL76350W', false, null, 7],
    ['OL37823115M', '/works/OL1067314W', false, null, 8],
    ['OL8978521M', '/works/OL99539W', false, null, 9],
    ['OL551935M', '/works/OL1146502W', false, null, 10],
    ['OL18088358M', '/works/OL1381165W', false, null, 11],
    ['OL20514400M', '/works/OL69382W', false, null, 12],
    ['OL6172585M', '/works/OL2564006W', false, null, 13],
    ['OL22885694M', '/works/OL262460W', false, null, 14],
    ['OL26673438M', '/works/OL1846076W', false, null, 15],
    ['OL48579872M', '/works/OL15449W', false, null, 16],
    ['OL9243061M', '/works/OL278001W', false, null, 17],
    ['OL9731031M', '/works/OL28988W', false, null, 18],
    ['OL23323799M', '/works/OL10328829W', false, null, 19],
    ['OL6786653M', '/works/OL2254120W', false, null, 20],
    ['OL35742699M', '/works/OL13150029W', false, null, 21],
    ['OL23325251M', '/works/OL15450W', false, null, 22],
    ['OL11876273M', '/works/OL4634859W', false, null, 23],
    ['OL7169485M', '/works/OL262390W', false, null, 24],
    ['OL25090738M', '/works/OL14877871W', false, null, 25],
    ['OL9363817M', '/works/OL6438825W', false, null, 26],
    ['OL34870139M', '/works/OL25834130W', false, null, 27],
    ['OL18499501M', '/works/OL10834W', false, null, 28],
    ['OL7135135M', '/works/OL96167W', false, null, 29],
    ['OL13990585M', '/works/OL15161992W', false, null, 30],
    ['OL20493119M', '/works/OL1738893W', false, null, 31],
    ['OL14041869M', '/works/OL88638W', false, null, 32],
    ['OL4011825M', '/works/OL1392435W', false, null, 33],
    ['OL6485731M', '/works/OL59619W', false, null, 34],
    ['OL24990811M', '/works/OL362672W', false, null, 35],
    ['OL6798546M', '/works/OL3002703W', false, null, 36],
    ['OL9723041M', '/works/OL15210196W', false, null, 37],
    ['OL5430500M', '/works/OL1395180W', false, null, 38],
    ['OL6943104M', '/works/OL183740W', false, null, 39]
]


  bookInfo = {
    toDisplay : true,
    inBookshelf : false,
    currentIndex : 9,
    id: "OL7122393M",
    title: 'the deaufhnohg khgljyf yf ouyf ouyf otudjfout duoytfiythfou yfu e',
    publish_date: '80534',
    publishers : 'The aim',
    by_statement : 'keagan',
    notes: `If you can keep your head when all about you  
       Are losing theirs and blaming it on you;  
    If you can trust yourself when all men doubt you,  
       But make allowance for their doubting too;  
    If you can wait and not be tired by waiting,  
       Or, being lied about, don’t deal in lies,  
    Or, being hated, don’t give way to hating,  
       And yet don’t look too good, nor talk too wise;
    
    If you can dream—and not make dreams your master;  
       If you can think—and not make thoughts your aim;  
    If you can meet with triumph and disaster  
       And treat those two impostors just the same;  
    If you can bear to hear the truth you’ve spoken  
       Twisted by knaves to make a trap for fools,  
    Or watch the things you gave your life to broken,  
       And stoop and build ’em up with wornout tools;
    
    If you can make one heap of all your winnings  
       And risk it on one turn of pitch-and-toss,  
    And lose, and start again at your beginnings  
       And never breathe a word about your loss;  
    If you can force your heart and nerve and sinew  
       To serve your turn long after they are gone,  
    And so hold on when there is nothing in you  
       Except the Will which says to them: “Hold on”;
    
    If you can talk with crowds and keep your virtue,  
       Or walk with kings—nor lose the common touch;  
    If neither foes nor loving friends can hurt you;  
       If all men count with you, but none too much;  
    If you can fill the unforgiving minute  
    With sixty seconds’ worth of distance run—  
       Yours is the Earth and everything that’s in it,  
    And—which is more—you’ll be a Man, my son!`
  }

  constructor() { }
}
