import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  @ViewChild('f') newPageForm: NgForm;

  userId: string;
  websiteId: string;
  pageId: string;
  pages = [{}];
  pageName: string;
  pageDesc: string;
  page = {};

  constructor(private pageService: PageService,
              private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.pageService.findPagesByWebsiteId(this.websiteId)
        .subscribe((pages) => {
          this.pages = pages;
        });
    });
  }

  createPage() {
    this.page['name'] = this.newPageForm.value.pageName;
    this.page['description'] = this.newPageForm.value.pageDesc;
    this.pageService.createPage(this.websiteId, this.page)
      .subscribe((page) => {
        this.page = page;
      });
  }
}
