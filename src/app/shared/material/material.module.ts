import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatDividerModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';

/** Add also bootstrap module for very primitive usage */
import { BootstrapGridModule } from 'ng2-bootstrap-grid';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    BootstrapGridModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    BootstrapGridModule
  ]
})
export class MaterialModule {
}
