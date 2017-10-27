import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  nameYoutube: string;
  textYoutube: string;
  urlYoutube: string;
  widthYoutube: string;
  userId: string;
  websiteId: string;
  pageId: string;
  wgid: string;
  widget = {};
  widgets = [{}];
  widgetEdit: Boolean;

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
            this.nameYoutube = widget['name'];
            this.textYoutube = widget['text'];
            this.widthYoutube = widget['width'];
            this.urlYoutube = widget['url'];
          }
        );
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['name'] = this.nameYoutube;
    this.widget['text'] = this.textYoutube;
    this.widget['url'] = this.urlYoutube;
    this.widget['width'] = this.widthYoutube;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }


  updateWidget() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['width'] = this.widthYoutube;
    this.widget['url'] = this.urlYoutube;
    this.widget['name'] = this.nameYoutube;
    this.widget['text'] = this.textYoutube;
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
