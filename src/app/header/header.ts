import { Component } from "@angular/core";
import { TopMenu } from "./top-menu/top-menu";
import { MainMenu } from "./main-menu/main-menu";

@Component({
   selector: 'app-header',
   standalone : true,
   templateUrl: './header.html',
   styleUrls : ['./header.css'],
   imports: [TopMenu, MainMenu]

})

export class Header {

}