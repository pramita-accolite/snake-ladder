import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Coordinates } from '../coordinates';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit{

  constructor(private playService:PlayersService)
  {}


  @Output() goToP1 =new EventEmitter();
  @Output() goToP2 =new EventEmitter();

  public diceNumber1?:number=0;
  public diceNumber2?:number=0;

  public disable1:boolean=false;
  public disable2:boolean=false;

  public pos1 :  number=1;
  public pos2 :  number=1;

  public winnerPlayer1 : boolean = false;
  public winnerPlayer2 : boolean = false;

  board1 : Coordinates[] = this.playService.board1

  ngOnInit(): void {
    this.goToP1.emit(1);
    this.goToP2.emit(1);
}

  generateNumber1()
  {
    this.diceNumber1=this.playService.rollDice();

    if((this.pos1+this.diceNumber1) <= 100)
    this.pos1+=this.diceNumber1;

    if(this.pos1 >= 100)
    {
      alert ("Player 1 has won with a dice value of "+this.diceNumber1)
      this.resetGame();
      return;
    }

    this.pos1 = this.playService.checkPos(this.pos1-1);
    
    this.disable1=true;
    this.disable2=false;
   
    console.log( "Updated Position for Player 1 " + this.pos1);
    this.goToP1.emit(this.pos1);
    
  }

  generateNumber2()
  {
    this.diceNumber2=this.playService.rollDice();

    this.disable1=false;
    this.disable2=true;

    if((this.pos2+this.diceNumber2) <= 100)
    this.pos2+=this.diceNumber2;

    if(this.pos2 >= 100)
    {
      alert("Player 2 has won with a dice value of "+this.diceNumber2)
      this.resetGame()
      return;
    }

    this.pos2 = this.playService.checkPos(this.pos2-1);
    

    console.log( "Updated Position is for player 2 " + this.pos2);
    this.goToP2.emit(this.pos2);

  }

resetGame()
{
  this.diceNumber1 = 0;
  this.diceNumber2 = 0;
  this.pos1 = 1;
  this.pos2 = 1;
  this.winnerPlayer1 = false;
  this.winnerPlayer2 = false;
  this.goToP1.emit(1);
  this.goToP2.emit(1);
}

generateRandom()
{
  this.playService.generateRandomSnake();
}



}
