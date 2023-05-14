import { Component } from '@angular/core';
import { parse } from 'node-html-parser';
import {
  Data311,
  FercFormParserService,
} from './ferc-form-parser/ferc-form-parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'elibrary-parser';
  data311: Data311 | undefined;

  constructor(public parser: FercFormParserService) {
    this.parser.parsedData.subscribe((formData) => (this.data311 = formData));
  }

  public onFileSelected(event: any) {
    this.parser.parseFile(event.target.files[0]);
  }
}
