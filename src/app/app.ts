import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Topheader } from "./topheader/topheader";
import { Container } from "./container/container";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Topheader, Container],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-ekart';
}
