import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {WidgetService} from '../../../services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  pageWidgets = [{}];
  websiteId; String;
  pageId: String;
  constructor(private userService: UserService, public sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute, private widgetService: WidgetService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.widgetService.findWidgetsByPageId( this.pageId )
      .subscribe(
        (widgets: any) => {
          this.pageWidgets = widgets;
        }
      );
  }
}
