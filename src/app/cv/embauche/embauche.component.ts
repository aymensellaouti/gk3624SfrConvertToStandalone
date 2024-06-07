import { Component, inject } from '@angular/core';

import { Cv } from '../model/cv';
import { EmbaucheService } from '../service/embauche.service';
import { ItemComponent } from '../item/item.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-embauche',
    templateUrl: './embauche.component.html',
    styleUrls: ['./embauche.component.css'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        ItemComponent,
    ],
})
export class EmbaucheComponent {
  public embauchees: Cv[] = [];
  embaucheServices = inject(EmbaucheService);
  constructor() {
    this.embauchees = this.embaucheServices.getEmbauchees();
  }
}
