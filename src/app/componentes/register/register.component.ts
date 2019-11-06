import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router'
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
    public router: Router
  ) { }

  ngOnInit() {
  }
  onSumitAddUser(){
    this.authService.register(this.email, this.password)
    .then ((res) =>{
     this.router.navigate(['/privado'])
    }).catch( (err) =>{
      console.log(err);
    });
  }
}

