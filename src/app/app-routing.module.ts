import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DarshanComponent } from './pages/darshan/darshan.component';
import { AartiTimingComponent } from './pages/aarti-timing/aarti-timing.component';
import { TempleTimingComponent } from './pages/temple-timing/temple-timing.component';
import { ImageGalleryComponent } from './pages/image-gallery/image-gallery.component';
import { ArchitectureComponent } from './pages/architecture/architecture.component';
import { HistoryComponent } from './pages/history/history.component';
import { HowToReachComponent } from './pages/how-to-reach/how-to-reach.component';
import { DonationComponent } from './pages/donation/donation.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubHeaderComponent } from './component/sub-header/sub-header.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'sub-header',
    component: SubHeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'darshan',
    component: DarshanComponent
  },
  {
    path: 'aarti-timing',
    component: AartiTimingComponent
  },
  {
    path: 'temple-timing',
    component: TempleTimingComponent
  },
  {
    path: 'image-gallery',
    component: ImageGalleryComponent
  },
  {
    path: 'architecture',
    component: ArchitectureComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'how-to-reach',
    component: HowToReachComponent
  },
  {
    path: 'donation',
    component: DonationComponent
  },
  {
    path: 'contact-us',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
