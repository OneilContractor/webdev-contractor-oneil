import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private widgetService: WidgetService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });
  }

  createWidget(type) {
    const widget = {'widgetType' : type};
    this.widgetService.createWidget(this.pageId, widget )
      .subscribe(
        (new_widget: any) => {
          this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', new_widget['_id']]);
        }
      );
  }

}
