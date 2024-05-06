import { Component, ElementRef, OnInit, Renderer2  , HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
 constructor(private _Renderer2: Renderer2, private _ElementRef: ElementRef) { }

  // ngOnInit() {
  //   // Add a CSS class to the navbar element to fix its position
  //   this._Renderer2.addClass(this._ElementRef.nativeElement, 'nav');
  // }
  navbg: any;
  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      console.log("doneee");
      this.navbg = {
        'background-color':'#000000'
      }
    }
    else {
      this.navbg = {}
    }
  }

}
