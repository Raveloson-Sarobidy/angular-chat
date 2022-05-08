import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionComponent } from './conversion/conversion.component';
import { AllConversationComponent } from './all-conversation/all-conversation.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    ConversionComponent,
    AllConversationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class HomeModule { }