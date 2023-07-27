import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/shared/model/Page';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() title: string = ""

  @Input() pages: Page[] = []

  constructor(
    private router: Router
  ) { }

  navigate(page: Page) {
    if (page.title == 'Esci') {
      sessionStorage.clear()
      localStorage.clear()
    }
    this.router.navigateByUrl(page.url)
  }

}
