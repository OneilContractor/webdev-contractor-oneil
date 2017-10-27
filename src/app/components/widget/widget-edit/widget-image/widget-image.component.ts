import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  nameImage: string;
  textImage: string;
  urlImage: string;
  widthImage: string;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget = {};
  widgets = [{}];
  widgetEdit: Boolean;
  uploadImage: String;

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute) {
  }

  baseUrl = environment.baseUrl;

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.widgetId)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.widgetEdit = true;
            this.nameImage = widget['name'];
            this.textImage = widget['text'];
            this.widthImage = widget['width'];
            this.urlImage = widget['url'];
            this.uploadImage = this.widget['upload'];
          }
        );
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'IMAGE';
    this.widget['text'] = this.textImage;
    this.widget['url'] = this.urlImage;
    this.widget['width'] = this.widthImage;
    this.widget['upload'] = this.uploadImage;
    this.widget['name'] = this.nameImage;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }

  updateWidget() {
    this.widget['widgetType'] = 'IMAGE';
    this.widget['text'] = this.textImage;
    this.widget['url'] = this.urlImage;
    this.widget['width'] = this.widthImage;
    this.widget['upload'] = this.uploadImage;
    this.widget['name'] = this.nameImage;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }

}
