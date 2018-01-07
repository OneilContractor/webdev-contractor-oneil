import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  textHtml: string;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget = {};
  widgets = [{}];
  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.websiteId = params['wgid'];
      this.widgetService.findWidgetById(this.websiteId)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.textHtml = widget['text'];
          }
        );
    });
  }

  updateWidget() {
    this.widget['widgetType'] = 'HTML';
    this.widget['text'] = this.textHtml;
    this.widgetService.updateWidget(this.websiteId, this.widget)
      .subscribe(
        (widgets: any) => {
          this.router.navigate(['user/' + this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.websiteId)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }
}
