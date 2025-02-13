import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule]
})
export class CardComponent {
  rotateX: number = 0;
  rotateY: number = 0;
  scale: number = 1;

  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const card = this.el.nativeElement.querySelector('.card');
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    this.rotateX = -(event.clientY - centerY) / 100;
    this.rotateY = (event.clientX - centerX) / 100;
    this.scale = 1.01; // Slightly reduce the scale effect
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.rotateX = 0;
    this.rotateY = 0;
    this.scale = 1;
  }
}
