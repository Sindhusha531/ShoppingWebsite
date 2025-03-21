import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenCategoryComponent } from './men-category/men-category.component';
import { WomenCategoryComponent } from './women-category/women-category.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { KidCategoryComponent } from './kid-category/kid-category.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-first-angular-proj';
  private overlayRef: OverlayRef | null = null; // Reference to the overlay

  @ViewChild('menLink', { static: false })
  menLink!: ElementRef;
  private clickListener: () => void;


  constructor(private router: Router,private overlay: Overlay,private renderer:Renderer2,private elementRef: ElementRef) {
    this.clickListener = this.renderer.listen('document', 'click', (event) => {
      this.onDocumentClick(event);
    });
  }

  ngOnInit(): void {
    console.log(this.router.config); // Logs all configured routes
  }
  onDocumentClick(event: MouseEvent)
  {
    console.log("onDocumentClick")
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.hideTooltip();
    }
  }
  //showMenTooltip: boolean = false;
  tooltipPosition: { top: string, left: string } = { top: '0px', left: '0px' };

  // onMouseEnter() {
  //   this.showMenTooltip = true;
  //   const rect = this.menLink.nativeElement.getBoundingClientRect();
  //   this.tooltipPosition = {
  //     top: `${rect.top + rect.height}px`,
  //     left: `${rect.left}px`
  //   };
  // }

  // onMouseLeave() {
  //   this.showMenTooltip = false;
  // }
  showMenTooltip(event: MouseEvent) {
    if (this.overlayRef) return;

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(event.target as HTMLElement)
      .withPositions([{ originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'cdk-overlay-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    const portal = new ComponentPortal(MenCategoryComponent);
    this.overlayRef.attach(portal);

    // Close the overlay only when clicking outside (not when hovering)
    this.overlayRef.backdropClick().subscribe(() => {
      
    });


  }
  onMouseLeave(event: MouseEvent): void {
    // Optional: Add logic here if you want to close on mouse leave after a delay or under certain conditions
    const relatedTarget = event.relatedTarget as HTMLElement;

    // Ensure that the related target is not inside the overlay
    if (this.overlayRef && relatedTarget && !this.overlayRef.overlayElement.contains(relatedTarget)) {
      this.hideTooltip();
    }
  }

  hideTooltip() {
   
    if (this.overlayRef) {
      console.log("overlayRef",this.overlayRef)
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
  showWoMenTooltip(event: MouseEvent) {
    if (this.overlayRef) return;

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(event.target as HTMLElement)
      .withPositions([{ originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'cdk-overlay-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    const portal = new ComponentPortal(WomenCategoryComponent);
    this.overlayRef.attach(portal);

    // Close the overlay only when clicking outside (not when hovering)
    this.overlayRef.backdropClick().subscribe(() => {
      
    });


  }
  showKidTooltip(event: MouseEvent) {
    if (this.overlayRef) return;

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(event.target as HTMLElement)
      .withPositions([{ originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'cdk-overlay-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    const portal = new ComponentPortal(KidCategoryComponent);
    this.overlayRef.attach(portal);

    // Close the overlay only when clicking outside (not when hovering)
    this.overlayRef.backdropClick().subscribe(() => {
      
    });


}
showHomeTooltip(event: MouseEvent) {
  if (this.overlayRef) return;

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(event.target as HTMLElement)
      .withPositions([{ originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'cdk-overlay-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    const portal = new ComponentPortal(HomeCategoryComponent);
    this.overlayRef.attach(portal);

    // Close the overlay only when clicking outside (not when hovering)
    this.overlayRef.backdropClick().subscribe(() => {
      
    });

}
}
