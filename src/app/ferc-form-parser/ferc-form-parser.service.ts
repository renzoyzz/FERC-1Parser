import { Injectable } from '@angular/core';
import { parse } from 'node-html-parser';
import { Observable, Observer } from 'rxjs';

export class Data311 {
  boyBalance?: string;
  additions?: string;
  retirements?: string;
  adjustments?: string;
  transfers?: string;
  eoyBalance?: string;
}

let data311Index: { [key: number]: string } = {
  0: 'boyBalance',
  1: 'additions',
  2: 'retirements',
  3: 'adjusments',
  4: 'transfers',
  5: 'eoyBalance',
};

@Injectable()
export class FercFormParserService {
  constructor() {
    this.parsedData = new Observable<Data311>((observer) => {
      this.observer = observer;
    });
  }

  public parsedData: Observable<Data311>;
  private observer: Observer<Data311> | null = null;

  public parseFile(file: File): void {
    file.text().then((data: string) => {
      let root = parse(data);
      let element311Strings: (string | undefined)[] | undefined = root
        .querySelectorAll('.sub-value.sub-replacement')
        .find((x) => x.text == '(311) Structures and Improvements')
        ?.parentNode.parentNode.querySelectorAll('.monetary_items')
        .map((x) => x.querySelector('.sign')?.firstChild.text);
      let element311Data = new Data311();
      if (element311Strings) {
        element311Strings.forEach((val, index) => {
          element311Data[data311Index[index] as keyof Data311] = val;
        });
      }
      this.observer?.next(element311Data);
    });
  }
}
