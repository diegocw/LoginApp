import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password)
    .then((res)=>{
      this.flashMessages.show ('Usuarios logado Correctamente.',
      {cssclass: 'alert-success', timeout:4000});
      this.router.navigate(['/privado']);
    }). catch((err) =>{
      this.flashMessages.show (err.message,
        {cssclass: 'alert-danger', timeout:4000});
      this.router.navigate(['/login']);
    });
  }
}
