import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300)
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  showContent: boolean = true;

  ngOnInit(): void {
    // Initial setup if needed
  }

  refresh() {
    this.showContent = false; // Fade out
    setTimeout(() => {
      window.location.reload(); // Reload after fade out
    }, 300); // Match the duration with the animation
  }
}
