import { Component, OnInit, Input, ElementRef, Directive, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import {isSvg} from './is-svg'

@Directive({
  selector: 'svg-image',
})
export class SvgImage implements OnInit {

  private _src
  svg

  domParser = new DOMParser()

  @Input()
  get src(){
    return this._src
  }

  set src(_src: string){
    this._src = _src;
    if(isSvg(_src)){
      this.build(_src)
      return;
    }
    this.httpClient.get(this._src, {responseType: "text"}).subscribe(svg => {
      this.build(svg);      
    })
  }

  build(svg){
    if(isSvg(svg)){
      this.svg = this.sanitizer.bypassSecurityTrustHtml(svg);
      (this.elementRef.nativeElement as HTMLElement).innerHTML = "";
      var component = this.domParser.parseFromString(svg, "text/html").firstElementChild.querySelector("body").firstElementChild;      
      this.rendrer.appendChild(this.elementRef.nativeElement, component);
    }else{
      throw `${this._src} is not a valid svg` 
    }
  }

  constructor(private httpClient: HttpClient, private elementRef: ElementRef, private sanitizer: DomSanitizer, private rendrer: Renderer2) {
    this.rendrer.setStyle(elementRef.nativeElement, "display", "inline-block")
   }

  ngOnInit() {
  }

}
