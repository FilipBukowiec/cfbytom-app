import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isFullscreen: boolean = false;

  toggleFullscreen(): void {
    if (!this.isFullscreen) {
      this.openFullscreen();
    } else {
      this.closeFullscreen();
    }
    this.isFullscreen = !this.isFullscreen;
  }

  openFullscreen(): void {
    const elem: any = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    // } else if (elem.mozRequestFullScreen) { /* Firefox */
    //   elem.mozRequestFullScreen();
    // } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    //   elem.webkitRequestFullscreen();
    // } else if (elem.msRequestFullscreen) { /* IE/Edge */
    //   elem.msRequestFullscreen();
    // }
  }

  closeFullscreen(): void {
    const doc: any = document;

    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    }
    // } else if (doc.mozCancelFullScreen) { /* Firefox */
    //   doc.mozCancelFullScreen();
    // } else if (doc.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    //   doc.webkitExitFullscreen();
    // } else if (doc.msExitFullscreen) { /* IE/Edge */
    //   doc.msExitFullscreen();
    // }
  }
}