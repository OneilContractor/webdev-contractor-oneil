import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})

export class WidgetListComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgets = [{}];

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetService.findWidgetsByPageId(this.pageId)
        .subscribe((widgets) => {
          this.widgets = widgets;
        });
    });
  }

  safeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
