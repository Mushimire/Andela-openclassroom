//the class for the component is defined over here. You can do the processing of the html structure in the .ts file. The processing will include activities such as connecting to the database, interacting with other components, routing, services
import { Component } from '@angular/core';


@Component({
  selector: 'ng6-rpwebsite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hubert i man';
  firstNameO = "Muragijimana";

}
