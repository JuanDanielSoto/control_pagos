import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { gapi } from 'gapi-script'; //API de Google

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
        apiKey: 'AIzaSyDuG0TvQHjk9r9xkMUzjzg54aOBN8TD78k',
        clientId: '536625799288-tslg18vk41no754jmvif7o0jk4c53cqv.apps.googleusercontent.com',
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
