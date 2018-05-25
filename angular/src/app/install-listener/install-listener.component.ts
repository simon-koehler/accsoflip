import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-install-listener',
  templateUrl: './install-listener.component.html'
})
export class InstallListenerComponent implements OnInit {

  private deferredPrompt: any;

  constructor() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      console.log('beforeinstallprompt', e);

      // show it anyways
      this.showInstallPrompt();
    });
  }

  showInstallPrompt() {
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
          alert('Thanks for downloading!');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }

  ngOnInit() {
  }

}
