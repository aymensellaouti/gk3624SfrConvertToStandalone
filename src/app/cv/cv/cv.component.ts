import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { registerLocaleData, NgIf, AsyncPipe, TitleCasePipe, DatePipe } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../service/cv.service";
import { Observable, catchError, distinctUntilChanged, filter, of } from "rxjs";
import { EmbaucheComponent } from "../embauche/embauche.component";
import { DetailCardComponent } from "../detail-card/detail-card.component";
import { ListComponent } from "../list/list.component";
registerLocaleData(localeFr, "fr");
@Component({
    selector: "app-cv",
    templateUrl: "./cv.component.html",
    styleUrls: ["./cv.component.css"],
    standalone: true,
    imports: [
        NgIf,
        ListComponent,
        DetailCardComponent,
        EmbaucheComponent,
        AsyncPipe,
        TitleCasePipe,
        DatePipe,
    ],
})
export class CvComponent {
  today = new Date();
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  nbre = 0;
  cvs$: Observable<Cv[]>;
  constructor(private toastr: ToastrService, private cvService: CvService) {
    this.toastr.info("Bonjorur :D");
    this.cvs$ = this.cvService.getCvs().pipe(
      distinctUntilChanged(),
      catchError((e) => {
        this.toastr.error(`Les données sont fake, merci de contatcer l'admin`);
        return of(this.cvService.getFakeCvs());
      })
    );

    this.cvService.selectCv$.subscribe((cv) => {
      console.log("j ai recu", cv);
      this.nbre++;
      this.selectedCv = cv;
    });
  }
}
