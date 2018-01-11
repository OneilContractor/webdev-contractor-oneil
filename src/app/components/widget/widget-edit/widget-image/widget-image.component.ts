import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  url: string;
  widthImage: string;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget = {};
  widgets = [{}];
  error = '';
  baseUrl = 'http://localhost:3100';

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.widthImage = this.widget['width'];
            this.url = this.widget['url'];
          }
        );
    });
  }

  updateWidget() {
    if ( this.url ) {
      this.widget['widgetType'] = 'IMAGE';
      this.widget['width'] = this.widthImage;
      this.widget['url'] = this.url;
      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe(
          (widgets: any) => {
            this.widgets = widgets;
            this.router.navigate(['user/', 'website', this.widgetId, 'page', this.pageId, 'widget']);
          }
        );
    } else {
      this.error = 'Please enter the URL of the image';
    }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
          this.router.navigate(['user/', 'website', this.widgetId, 'page', this.pageId, 'widget']);
        }
      );
  }

}
