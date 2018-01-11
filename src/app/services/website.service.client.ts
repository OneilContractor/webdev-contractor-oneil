import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor(private  http: Http) { }

  userWebsites  = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '123', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '123', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById
  };

  createWebsite(userId: String, website: any) {
    website.developerId = userId;
    return this.http.post(environment.baseUrl + '/api/user/' + userId + '/website', website)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWebsitesByUser(userId: String) {
    const url = environment.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteById(websiteId: String) {
    const url = environment.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(websiteId, website) {
    const url = environment.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }
  deleteWebsite(websiteId) {
    return this.http.delete(environment.baseUrl + '/api/website/' + websiteId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
