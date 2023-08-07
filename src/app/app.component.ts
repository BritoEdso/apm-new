import { Component } from "@angular/core";
/*
  selector: defines the name of the component as a derective when used in HTML
  template: defines the HTML code used in the derective
*/
@Component({
  selector: 'pm-root', 
  template: ` 
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  ` 
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}