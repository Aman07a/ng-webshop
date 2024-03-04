import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputComponent } from './input/input.component';
import { NavComponent } from './nav/nav.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [InputComponent, NavComponent, LinkComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [InputComponent],
})
export class SharedModule {}