import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from './app.settings';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class ApiService {
	authToken: any;
	user: any;
	constructor(private http: Http) { }

	login(username, password) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(AppSettings.API_PATH + '/users/authenticate', {
				username: username,
				password: password
			}, { headers: headers })
			.map(res => res.json());
		
	}

	loadToken() {
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}

	loggedIn() {
		return tokenNotExpired('id_token', this.authToken);
	}

	storeUserData(token, user) {
		localStorage.setItem('id_token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.authToken = token;
		this.user = user;
	}

	getProfile() {
		let headers = new Headers();
		this.loadToken();
		headers.append('Authorization', this.authToken);
		headers.append('Content-type', 'application/json');

		return this.http.get(AppSettings.API_PATH + '/users/profile',{headers: headers})
			.map(res => res.json());
		
	}

}
