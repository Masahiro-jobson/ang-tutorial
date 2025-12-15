import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// @ - is decorator which decorates components and every component needs
// decorator
@Component({
  // go into the webpage and wherever it finds app-root, it injects code in it.
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title= "Project CC";
  date = new Date();
}
