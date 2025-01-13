import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  
  searchByCapital (event:any):void{
    console.log('Desde ByCapitalPage')
    console.log({event});
  }

}
