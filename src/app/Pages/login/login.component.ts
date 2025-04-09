import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { env } from '../../env/credentials';
import { gapi } from 'gapi-script'; //API de Google

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router);
  title = 'Deudores';
  
  ngOnInit(): void {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: env.GOOGLE_API_TOKEN,
        clientId: env.GOOGLE_CLIENT_ID,
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
        ],
        scope: 'profile email https://www.googleapis.com/auth/drive.file',
      });
    });
  }

  signIn(): void {
    gapi.auth2.getAuthInstance().signIn().then(() => {
      const accessToken = gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getAuthResponse().access_token;
      // Ahora puedes usar accessToken para las peticiones a la API de Drive
      console.log(accessToken);
      this.router.navigate(["/dashboard"])
    });
  }
}
