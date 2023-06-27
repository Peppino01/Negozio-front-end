import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/shared/model/Page';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() pages: Page[] = []

  constructor(
    private router: Router
  ) { }

  navigate(page: Page) {
    this.router.navigateByUrl(page.url)
  }

}
