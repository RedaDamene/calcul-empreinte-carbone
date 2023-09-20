import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  pseudo:string = ''
  password: string= ''

  constructor(private router: Router) {
  }

  ngOnInit() {
    const user = {
      pseudo : "reda",
      password : "password"
    }

    window.sessionStorage.setItem("user", JSON.stringify(user));
  }
  sginIn(data: { pseudo:string, password:string }) {
    let user = window.sessionStorage.getItem("user");
    if (user !== null) {
      let userAuth = JSON.parse(user);
      if (data.pseudo === userAuth.pseudo && data.password === userAuth.password) {
        window.sessionStorage.setItem("isAuthenticated", "true");
        this.router.navigate(['/edit']);
        console.log("true")
      }else {
        alert("pseudo ou mot de passe incorrect")
      }
    }
  }
}
