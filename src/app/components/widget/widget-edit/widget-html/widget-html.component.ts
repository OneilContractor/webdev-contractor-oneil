import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

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
  wgid: string;
  widgetEdit: Boolean;
  widget = {};
  widgets = [{}];

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.wgid = params['wgid'];
      this.widgetService.findWidgetById(this.wgid)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.widgetEdit = true;
            this.textHtml = widget['text'];
          }
        );
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'HTML';
    this.widget['text'] = this.textHtml;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }

  updateWidget() {
    this.widget['widgetType'] = 'HTML';
    this.widget['text'] = this.textHtml;
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }
}
