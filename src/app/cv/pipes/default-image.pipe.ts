import { Pipe, PipeTransform } from "@angular/core";
import { CONSTANTES } from "../../config/constantes.config";

@Pipe({
    name: "defaultImage",
    standalone: true,
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    return path.trim() ? path : CONSTANTES.defaultImage;
  }
}
