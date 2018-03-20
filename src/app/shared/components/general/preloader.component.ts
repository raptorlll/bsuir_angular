import {Component, OnInit} from '@angular/core';
import {PreloaderService} from '../../services/preloader.service';

@Component({
  selector: 'app-preloader',
  template: `
    <div *ngIf="isLoading" class="preloader">
      <span>Loading</span>
    </div>
  `,
  styles: [
    `
      .preLoader {
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        display: none;
        text-align: center;
      }
      .preloader span{
        text-align: center;
        vertical-align: center;
      }

    `
  ]
})
export class PreloaderComponent implements OnInit {
  isLoading: boolean;

  constructor(private preloaderService: PreloaderService) {
  }

  ngOnInit() {
    this.preloaderService
      .isLoading
      .subscribe(isLoading => {
        this.isLoading = isLoading;
      });
  }

}
