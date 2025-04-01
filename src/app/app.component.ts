import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { gapi } from 'gapi-script'; //API de Google
import { env } from './env/credentials';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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
    });
  }

}
