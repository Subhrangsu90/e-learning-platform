import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {
  isNavOpen = false;
  @Output() closeUserMenuBar = new EventEmitter<void>();

  toggleNav() {
    console.log(this.isNavOpen);

    this.isNavOpen = !this.isNavOpen;
  }

  onClose() {
    this.closeUserMenuBar.emit();
  }
}
