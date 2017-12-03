import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  textHeader: string;
  sizeHeader: string;
  userId: string;
  websiteId: string;
  pageId: string;
  wgid: string;
  widget = {};
  widgetEdit: Boolean;
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
      this.wgid = params['wgid'];
      this.textHeader = 'Home Page';
      this.sizeHeader = '2';
      if (this.wgid) {
        this.widgetService.findWidgetById(this.wgid)
          .subscribe((widget) => {
            this.widget = widget;
            this.widgetEdit = true;
            this.textHeader = this.widget['text'];
            this.sizeHeader = this.widget['size'];
          });
      }
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'HEADING';
    this.widget['text'] = this.textHeader;
    this.widget['size'] = this.sizeHeader;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/user', this.userId,
            'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

  updateWidget() {
    this.widget['widgetType'] = 'HEADING';
    this.widget['text'] = this.textHeader;
    this.widget['size'] = this.sizeHeader;
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/user', this.userId,
            'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe((data) => {
        if (data === 200) {
          this.router.navigate(['/user', this.userId,
            'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

}
