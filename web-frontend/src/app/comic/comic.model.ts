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

import {Page} from './page.model';

export class Comic {
  id: number;
  filename: string;
  base_filename: string;
  publisher: string;
  series: string;
  volume: string;
  issue_number: string;
  title: string;
  story_arcs: string[];
  description: string;
  notes: string;
  summary: string;
  missing: boolean;
  archive_type: string;
  comic_vine_id: string;
  comic_vine_url: string;
  added_date: string;
  cover_date: string;
  year_published: number;
  last_read_date: string;
  page_count: number;
  characters: string[];
  teams: string[];
  locations: string[];
  pages: Page[];
  blocked_page_count: number;
  deleted_page_count: number;

  constructor(
    id?: number,
    filename?: string,
    base_filename?: string,
    publisher?: string,
    series?: string,
    volume?: string,
    issue_number?: string,
    title?: string,
    story_arcs?: string[],
    description?: string,
    notes?: string,
    summary?: string,
    missing?: boolean,
    archive_type?: string,
    comic_vine_id?: string,
    comic_vine_url?: string,
    added_date?: string,
    cover_date?: string,
    year_published?: number,
    last_read_date?: string,
    page_count?: number,
    characters?: string[],
    teams?: string[],
    locations?: string[],
    pages?: Page[],
    blocked_page_count?: number,
    deleted_page_count?: number,
  ) {
    this.id = id;
    this.filename = filename;
    this.base_filename = base_filename;
    this.publisher = publisher;
    this.series = series;
    this.volume = volume;
    this.issue_number = issue_number;
    this.title = title;
    this.story_arcs = story_arcs;
    this.description = description;
    this.notes = notes;
    this.summary = summary;
    this.missing = missing;
    this.archive_type = archive_type;
    this.comic_vine_id = comic_vine_id;
    this.comic_vine_url = comic_vine_url;
    this.added_date = added_date;
    this.cover_date = cover_date;
    this.year_published = year_published;
    this.last_read_date = last_read_date;
    this.page_count = page_count;
    this.characters = characters;
    this.teams = teams;
    this.locations = locations;
    this.pages = pages;
    this.blocked_page_count = blocked_page_count;
    this.deleted_page_count = deleted_page_count;
  }
}
