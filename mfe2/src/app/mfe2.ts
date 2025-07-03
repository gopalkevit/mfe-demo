import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mfe2',
  imports: [],
  standalone: true,
  templateUrl: './mfe2.html',
  styleUrl: './mfe2.scss',
  encapsulation: ViewEncapsulation.None
})
export class Mfe2 implements OnInit {
  //used for load mfe1 styles into mfe2
    ngOnInit() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'http://localhost:4201/styles.css';
    document.head.appendChild(link);
  }
} 
