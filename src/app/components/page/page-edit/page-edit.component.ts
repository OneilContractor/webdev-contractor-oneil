import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  pages = [{}];
  page = {};
  pageName: String;
  pageDescription: String;

  constructor(private pageService: PageService,
              private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
      this.page = this.pageService.findPageById(this.pageId);
      this.pageName = this.page['name'];
      this.pageDescription = this.page['description'];
    });
  }

  editPage() {
    this.page['name'] = this.pageName;
    this.page['description'] = this.pageDescription;
    this.page = this.pageService.updatePage(this.pageId, this.page);
  }

  deletePage() {
    this.pageService.deletePage(this.pageId);
  }
}
