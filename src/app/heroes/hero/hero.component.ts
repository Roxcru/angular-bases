import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "Superman";
  public age:  number = 28;

  get capitalizeName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.name = "Batman";
  }

  changeAge():void {
    this.age = 30;
  }

  resetForm():void{
    this.name = "Superman";
    document.querySelectorAll('h1')!.forEach(element =>{
      element.innerHTML = '<h1>Desde Angular</h1>';
    })
  }
}
