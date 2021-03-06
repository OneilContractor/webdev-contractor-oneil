import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private pageService: PageService) { }
  wid: String;
  webSitePages = [{}];
  page = {};
  error = '';
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wid = params['wid'];
        }
      );
    this.pageService.findPageByWebsiteId(this.wid)
      .subscribe(
        (pages: any) => {
          this.webSitePages = pages;
        }
      );
  }

  createPage() {
    if (this.pageForm.value.name) {
      const newPage = {
        'name': this.pageForm.value.name,
        'description': this.pageForm.value.description
      };
      this.page = this.pageService.createPage(this.wid, newPage)
        .subscribe(
          (page: any) => {
            this.router.navigate(['/user', 'website', this.wid, 'page']);
          }
        );
    } else {
      this.error = 'Please enter name of the page';
    }
  }
}
