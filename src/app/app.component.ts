import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthModalComponent } from './shared/components/ui/auth-modal/auth-modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ROSE happy gift';
  ngOnInit(): void {
    initFlowbite();
  }
}
