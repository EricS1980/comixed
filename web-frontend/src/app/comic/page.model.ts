/*
 * ComiXed - A digital comic book library management application.
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

import {PageType} from './page-type.model';

export class Page {
  id: number;
  comic_id: number;
  filename: string;
  width: number;
  height: number;
  index: number;
  hash: string;
  deleted: boolean;
  page_type: PageType;
  blocked: boolean;

  constructor(
    id?: number,
    comic_id?: number,
    filename?: string,
    width?: number,
    height?: number,
    hash?: string,
    deleted?: boolean,
    page_type?: PageType,
    blocked?: boolean,
  ) {
    this.id = id;
    this.comic_id = comic_id;
    this.filename = filename;
    this.width = width;
    this.height = height;
    this.hash = hash;
    this.deleted = deleted;
    this.page_type = page_type;
    this.blocked = blocked;
  }
}
