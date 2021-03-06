import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  pid: String;
  wid: String;
  newWidget: String;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private widgetService: WidgetService,
              private sharedService: SharedService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.wid = params['wid'];
      this.pid = params['pid'];
    });
  }

  createWidget(type) {
    const widget = {'widgetType' : type};
    this.widgetService.createWidget(this.pid, widget )
      .subscribe(
        (new_widget: any) => {
          this.router.navigate(['user/', 'website', this.wid, 'page', this.pid, 'widget', new_widget['_id']]);
        }
      );
  }

}
