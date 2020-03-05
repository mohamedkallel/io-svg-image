import { NgModule } from "@angular/core";
import { SvgImage } from './svg-image.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule(
    {
        declarations: [SvgImage],
        exports:[HttpClientModule, SvgImage]
    }
)
export class SvgImageModule{}