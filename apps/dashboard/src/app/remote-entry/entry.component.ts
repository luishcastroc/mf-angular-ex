import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'mf-example-dashboard-entry',
  template: `<mf-example-nx-welcome></mf-example-nx-welcome>`,
})
export class RemoteEntryComponent {}
