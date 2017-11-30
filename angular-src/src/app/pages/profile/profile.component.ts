import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/api.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	user: Object;

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.getProfile().subscribe(profile => {
			this.user = profile.user.name;
		});
		
	}



}
