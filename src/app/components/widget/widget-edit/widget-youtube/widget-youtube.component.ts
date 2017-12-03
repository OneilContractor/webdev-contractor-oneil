import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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
              private activatedRoutes: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.wgid = params['wgid'];
      if (this.wgid) {
        this.widgetService.findWidgetById(this.wgid)
          .subscribe((widget) => {
            this.widget = widget;
            this.widgetEdit = true;
            this.nameYoutube = this.widget['name'];
            this.textYoutube = this.widget['text'];
            this.urlYoutube = this.widget['url'];
            this.widthYoutube = this.widget['width'];
          });
      }
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['name'] = this.nameYoutube;
    this.widget['text'] = this.textYoutube;
    this.widget['url'] = this.urlYoutube;
    this.widget['width'] = this.widthYoutube;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
      });
  }


  updateWidget() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['width'] = this.widthYoutube;
    this.widget['url'] = this.urlYoutube;
    this.widget['name'] = this.nameYoutube;
    this.widget['text'] = this.textYoutube;
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe((data) => {
        if (data === 200) {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }
}
