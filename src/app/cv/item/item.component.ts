import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../service/cv.service";
import { DefaultImagePipe } from "../pipes/default-image.pipe";
import { NgStyle } from "@angular/common";

@Component({
    selector: "app-item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.css"],
    standalone: true,
    imports: [NgStyle, DefaultImagePipe],
})
export class ItemComponent {
  @Input({ required: true }) cv!: Cv;
  @Input() size = 50;
  cvService = inject(CvService);
  onSelectCv() {
    this.cvService.selectCv(this.cv);
  }
}
