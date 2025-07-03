import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation,  } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mfe1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mfe1.html',
  styleUrl: './mfe1.scss',
  encapsulation: ViewEncapsulation.None
})
export class Mfe1 {

  showAlert() {
    Swal.fire('MFE1 Alert', 'This is a shared SweetAlert from Shell!', 'success');
  }
}
