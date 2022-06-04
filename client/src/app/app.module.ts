import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonNormalComponent } from './components/button-normal/button-normal.component';
import { TitleComponent } from './components/title/title.component';
import { InlineFormFieldComponent } from './components/inline-form-field/inline-form-field.component';
import { CardComponent } from './components/card/card.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ImageHolderComponent } from './components/image-holder/image-holder.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProjectComponent } from './pages/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonNormalComponent,
    TitleComponent,
    InlineFormFieldComponent,
    CardComponent,
    NewsLetterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    ImageHolderComponent,
    GalleryComponent,
    ContactFormComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
