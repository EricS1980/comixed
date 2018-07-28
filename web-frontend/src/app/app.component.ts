/*
 * ComixEd - A digital comic book library management application.
 * Copyright (C) 2017, The ComiXed Project
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.package
 * org.comixed;
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingModule} from 'ngx-loading';

import {AuthenticationService} from './authentication/authentication.service';
import {ComicService} from './comic/comic.service';
import {AlertService} from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ComicService, AlertService],
})
export class AppComponent implements OnInit {
  title = 'ComixEd';
  alert_type: string;
  alert_message: string;
  busy_message: string;
  busy = false;
  comic_count = 0;
  read_count = 0;

  constructor(
    private authenticationService: AuthenticationService,
    private comic_service: ComicService,
    private alert_service: AlertService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.alert_service.error_messages.subscribe(
      (message: string) => {
        this.alert_type = 'alert-danger';
        this.alert_message = message;
      }
    );
    this.alert_service.info_messages.subscribe(
      (message: string) => {
        this.alert_type = 'alert-info';
        this.alert_message = message;
      }
    );
    this.alert_service.busy_messages.subscribe(
      (message: string) => {
        if (message.length > 0) {
          this.busy_message = message;
          this.busy = true;
        } else {
          this.busy = false;
        }
      }
    );
    setInterval(() => {
      this.comic_service.get_library_comic_count().subscribe(
        count => this.comic_count = count,
        error => console.log('ERROR:', error.message));
    }, 250);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }

  clearErrorMessage(): void {
    this.alert_message = '';
  }

  isAuthenticated(): boolean {
    return false;
  }

  is_admin(): boolean {
    return false;
  }
}
