import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string  = 'Mi primera pagina web';
  public counter: number = 10;
  public counter2: number = 10;

  increaseBy(value:number){
    this.counter+=value;
  }

   reset(){
    this.counter = this.counter2;
   }
}
