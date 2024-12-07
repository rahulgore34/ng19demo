import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ng19demo';
  service = inject(DataService)

  ngOnInit(): void {
    this.service.getData('dev').subscribe(dev => {
      console.log(dev);
      
    })
  }
}
