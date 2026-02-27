import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private router: Router) {}

  login() {
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'Redirecting...',
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      this.router.navigate(['/Home']);
    });
  }
}
