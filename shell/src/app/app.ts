import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  implements OnInit {
  protected title = 'shell';

  ngOnInit(): void {
    this.loadRemoteStyles('http://localhost:4201/styles.css'); // ✅ MFE1's global styles
  }

  private loadRemoteStyles(url: string): void {
    if (!document.querySelector(`link[href="${url}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.crossOrigin = 'anonymous'; // optional for CORS safety
      document.head.appendChild(link);
    }
  }
}
