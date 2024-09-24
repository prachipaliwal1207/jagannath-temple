import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DarshanComponent } from './pages/darshan/darshan.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AartiTimingComponent } from './pages/aarti-timing/aarti-timing.component';
import { TempleTimingComponent } from './pages/temple-timing/temple-timing.component';
import { ImageGalleryComponent } from './pages/image-gallery/image-gallery.component';
import { ArchitectureComponent } from './pages/architecture/architecture.component';
import { HistoryComponent } from './pages/history/history.component';
import { HowToReachComponent } from './pages/how-to-reach/how-to-reach.component';
import { DonationComponent } from './pages/donation/donation.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubHeaderComponent } from './component/sub-header/sub-header.component';
import { SliderComponent } from './pages/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DarshanComponent,
    CategoriesComponent,
    AartiTimingComponent,
    TempleTimingComponent,
    ImageGalleryComponent,
    ArchitectureComponent,
    HistoryComponent,
    HowToReachComponent,
    DonationComponent,
    ContactUsComponent,
    SubHeaderComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
