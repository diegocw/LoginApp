import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
// import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService:AuthService,
    public router: Router,
    public flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSumitAddUser(){
    this.authService.register(this.email, this.password)
    .then ((res) =>{
      this.flashMessages.show ('Usuarios Creado Correctamente.',
      {cssclass: 'alert-success', timeout:4000});
     this.router.navigate(['/privado'])
    }).catch( (err) =>{
      this.flashMessages.show (err.message,
      {cssclass: 'alert-danger', timeout:4000});
    });
  }
}

