import { Component } from '@angular/core';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SnakeLadderGame';

  constructor(private playerService : PlayersService)
  {}

  board = this.playerService.board;
  board1 = this.playerService.board1;


  public val1 !: number;
  public val2 !: number;

assignVal1()
{
  this.playerService.val1 = this.val1
}

assignVal2()
{
  this.playerService.val2 = this.val2
}

  snakeList : number[] = this.playerService.snakeList;
  ladderList : number[] = this.playerService.ladderList; 

    checkSnake(p : number):boolean{
       return this.playerService.checkSnake(p);
    }

    checkLadder(p:number):boolean{
      return this.playerService.checkLadder(p);
    }

    checkPlayer1(p : number):boolean{
     return this.playerService.checkPlayer1(p);
  }

  checkPlayer2(p : number):boolean{
    return this.playerService.checkPlayer2(p);
  }

    checkPlayerBoth(p :number) :boolean {
    return this.playerService.checkPlayerBoth(p);
    }


}


