import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../common/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  username: String;
	password: String;

	constructor(private router: Router, private apiService: ApiService) { }

	ngOnInit() {
	}

	login() {
		this.apiService.login(this.username, this.password).subscribe(data => {
			if (data.success) {
				this.apiService.storeUserData(data.token, data.user);
				this.router.navigate(['/profile']);
			} else {
				console.log('noo')
			}
		})
	}

}
