import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { PlayersComponent } from './players/players.component';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  rollDice() : number{
    const diceValue =  Math.floor(Math.random() * 6) + 1;
    return diceValue;
  }


  board=[[100,99,98,97,96,95,94,93,92,91],
  [81,82,83,84,85,86,87,88,89,90],
  [80,79,78,77,76,75,74,73,72,71],
  [61,62,63,64,65,66,67,68,69,70],
  [60,59,58,57,56,55,54,53,52,51],
  [41,42,43,44,45,46,47,48,49,50],
  [40,39,38,37,36,35,34,33,32,31],
  [21,22,23,24,25,26,27,28,29,30],
  [20,19,18,17,16,15,14,13,12,11],
  [1,2,3,4,5,6,7,8,9,10]];

  snakeList : number[] = [26,92,51,97]
  ladderList : number[] = [25,60,80]

board1= [
  {"curr_pos": 1,
    "take_to": 1},
  {
    "curr_pos": 2,
    "take_to": 2
  },
  {
    "curr_pos": 3,
    "take_to": 3
  },
  {
    "curr_pos": 4,
    "take_to": 4
  },
  {
    "curr_pos": 5,
    "take_to": 5
  },
  {
    "curr_pos": 6,
    "take_to": 6
  },
  {
    "curr_pos": 7,
    "take_to": 7
  },
  {
    "curr_pos": 8,
    "take_to": 8
  },
  {
    "curr_pos": 9,
    "take_to": 9
  },
  {
    "curr_pos": 10,
    "take_to": 10
  },
  {"curr_pos": 11,
  "take_to": 11
},
{
  "curr_pos": 12,
  "take_to": 12
},
{
  "curr_pos": 13,
  "take_to": 13
},
{
  "curr_pos": 14,
  "take_to": 14
},
{
  "curr_pos": 15,
  "take_to": 15
},
{
  "curr_pos": 16,
  "take_to": 16
},
{
  "curr_pos": 17,
  "take_to": 17
},
{
  "curr_pos": 18,
  "take_to": 18
},
{
  "curr_pos": 19,
  "take_to": 19
},
{
  "curr_pos": 20,
  "take_to": 20
},
{"curr_pos": 21,
"take_to": 21
},
{
"curr_pos": 22,
"take_to": 22
},
{
"curr_pos": 23,
"take_to": 23
},
{
"curr_pos": 24,
"take_to": 24
},
{
"curr_pos": 25,
"take_to": 40
},
{
"curr_pos": 26,
"take_to": 6
},
{
"curr_pos": 27,
"take_to": 27
},
{
"curr_pos": 28,
"take_to": 28
},
{
"curr_pos": 29,
"take_to": 29
},
{
"curr_pos": 30,
"take_to": 30
},
{"curr_pos": 31,
"take_to": 31},
{
"curr_pos": 32,
"take_to": 32
},
{
"curr_pos": 33,
"take_to": 33
},
{
"curr_pos": 34,
"take_to": 34
},
{
"curr_pos": 35,
"take_to": 35
},
{
"curr_pos": 36,
"take_to": 36
},
{
"curr_pos": 37,
"take_to": 37
},
{
"curr_pos": 38,
"take_to": 38
},
{
"curr_pos": 39,
"take_to": 39
},
{
"curr_pos": 40,
"take_to": 40
},
{"curr_pos": 41,
    "take_to": 41},
  {
    "curr_pos": 42,
    "take_to": 42
  },
  {
    "curr_pos": 43,
    "take_to": 43
  },
  {
    "curr_pos": 44,
    "take_to": 44
  },
  {
    "curr_pos": 45,
    "take_to": 45
  },
  {
    "curr_pos": 46,
    "take_to": 46
  },
  {
    "curr_pos": 47,
    "take_to": 47
  },
  {
    "curr_pos": 48,
    "take_to": 48
  },
  {
    "curr_pos": 49,
    "take_to": 49
  },
  {
    "curr_pos": 50,
    "take_to": 50
  },
  {
  "curr_pos": 51,
  "take_to": 9
  },
  {
  "curr_pos": 52,
  "take_to": 52
  },
  {
  "curr_pos": 53,
  "take_to": 53
  },
  {
  "curr_pos": 54,
  "take_to": 54
  },
  {
  "curr_pos": 55,
  "take_to": 55
  },
  {
  "curr_pos": 56,
  "take_to": 56
  },
  {
  "curr_pos": 57,
  "take_to": 57
  },
  {
  "curr_pos": 58,
  "take_to": 58
  },
  {
  "curr_pos": 59,
  "take_to": 59
  },
  {"curr_pos": 60,
      "take_to": 97},
    {
      "curr_pos": 61,
      "take_to": 61
    },
    {
      "curr_pos": 62,
      "take_to": 62
    },
    {
      "curr_pos": 63,
      "take_to": 63
    },
    {
      "curr_pos": 64,
      "take_to": 64
    },
    {
      "curr_pos": 65,
      "take_to": 65
    },
    {
      "curr_pos": 66,
      "take_to": 66
    },
    {
      "curr_pos": 67,
      "take_to": 67
    },
    {
      "curr_pos":68,
      "take_to": 68
    },
    {
      "curr_pos": 69,
      "take_to": 69
    },
    {
    "curr_pos": 70,
    "take_to": 70
    },
    {
    "curr_pos": 71,
    "take_to": 71
    },
    {
    "curr_pos": 72,
    "take_to": 72
    },
    {
    "curr_pos": 73,
    "take_to": 73
    },
    {
    "curr_pos": 74,
    "take_to": 74
    },
    {
    "curr_pos": 75,
    "take_to": 75
    },
    {
    "curr_pos": 76,
    "take_to": 76
    },
    {
    "curr_pos": 77,
    "take_to": 77
    },
    {
    "curr_pos": 78,
    "take_to": 78
    },
    {"curr_pos": 79,
        "take_to": 79},
      {
        "curr_pos": 80,
        "take_to": 94
      },
      {
        "curr_pos": 81,
        "take_to": 81
      },
      {
        "curr_pos": 82,
        "take_to": 22
      },
      {
        "curr_pos": 83,
        "take_to": 83
      },
      {
        "curr_pos": 84,
        "take_to": 84
      },
      {
        "curr_pos": 85,
        "take_to": 85
      },
      {
        "curr_pos": 86,
        "take_to": 86
      },
      {
        "curr_pos": 87,
        "take_to": 87
      },
      {
        "curr_pos": 88,
        "take_to": 88
      },
      {
      "curr_pos": 89,
      "take_to": 89
      },
      {
      "curr_pos": 90,
      "take_to": 90
      },
      {
      "curr_pos": 91,
      "take_to": 91
      },
      {
      "curr_pos": 92,
      "take_to": 1
      },
      {
      "curr_pos": 93,
      "take_to": 93
      },
      {
      "curr_pos": 94,
      "take_to": 94
      },
      {
      "curr_pos": 95,
      "take_to": 95
      },
      {
      "curr_pos": 96,
      "take_to": 96
      },
      {
      "curr_pos": 97,
      "take_to": 7
      },
      {"curr_pos": 98,
          "take_to": 98
        },
        {
          "curr_pos": 99,
          "take_to": 99
        },
        {
          "curr_pos": 100,
          "take_to": 100
        }
];

val1 : number = 0;
val2 : number = 0;

public z1: number = 0;
public z2: number = 0;

checkPos(pos:number): number
{
 this.z1  = this.board1[pos].curr_pos;
 this.z2= this.board1[pos].take_to;
  
  if(this.z1!=this.z2)
  return this.z2;
else
  return this.z1;
}


generateRandomSnake()
{
  
  let randomCurrPos : number = Math.floor(Math.random() *99  )+1
  let randomTakeToPos : number =  Math.floor(Math.random() *99 )+1

  
  if (randomCurrPos > randomTakeToPos  )
  {
    this.snakeList.push(randomCurrPos);
    this.board1[randomCurrPos-1] = {"curr_pos" : randomCurrPos , "take_to" : randomTakeToPos}

    console.log("Currpos "+randomCurrPos)
    console.log("taketo"+randomTakeToPos)
  }
  else if(randomCurrPos==randomTakeToPos)
  {
    console.log("Currpos "+randomCurrPos);
    console.log("Taketo "+randomTakeToPos);
  }
  else
  {
    this.ladderList.push(randomCurrPos);
    this.board1[randomCurrPos-1]= {"curr_pos" : randomCurrPos , "take_to" : randomTakeToPos}

    console.log("Currpos "+randomCurrPos)
    console.log("taketo"+randomTakeToPos)
  }

}

checkSnake(p : number):boolean{
  for(let i =0;i<this.snakeList.length; i++)
  {
    if (this.snakeList[i]==p)
    return true;
  }
  return false;
}

checkLadder(p:number):boolean{
  for(let i =0;i<this.ladderList.length; i++)
    {
      if (this.ladderList[i]==p)
      return true;
    }
    return false;
}

checkPlayer1(k : number):boolean{
  if(k==this.val1){
    return true;
  }
  else{
  return false;
  }
}

checkPlayer2(k : number):boolean{
if(k==this.val2){
  return true;
}
else{
return false;
}
}

checkPlayerBoth(k :number) :boolean {
  if(k==this.val1 && k==this.val2)
  return true;
  else 
  return false;
}

}

