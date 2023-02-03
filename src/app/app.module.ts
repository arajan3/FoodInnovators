import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Pipe } from '@angular/core';
import {Ng2SearchPipeModule} from 'ng2-search-filter'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homeComponents/home/home.component';
import { FooterComponent } from './homeComponents/footer/footer.component';
import { SocialMediaComponent } from './homeComponents/social-media/social-media.component';
import { HomeSecCardComponent } from './homeComponents/home-sec-card/home-sec-card.component';
import { HomeFirstCardComponent } from './homeComponents/home-first-card/home-first-card.component';
import { CookingClassesComponent } from './homeComponents/cooking-classes/cooking-classes.component';
import { CookingSessionVideoComponent } from './homeComponents/cooking-session-video/cooking-session-video.component';
import { HomeWelcomePageComponent } from './homeComponents/home-welcome-page/home-welcome-page.component';
import { WhatWeDoVideoComponent } from './whatWeDoComponents/what-we-do-video/what-we-do-video.component';
import { WhatWeDoCardsComponent } from './whatWeDoComponents/what-we-do-cards/what-we-do-cards.component';
import { WhatWeDoComponent } from './whatWeDoComponents/what-we-do/what-we-do.component';
import { MeetTheTeamComponent } from './whatWeDoComponents/meet-the-team/meet-the-team.component';
import { MeetTheTeamCardsComponent } from './whatWeDoComponents/meet-the-team-cards/meet-the-team-cards.component';
import { ChefInternProgramComponent } from './whatWeDoComponents/chef-intern-program/chef-intern-program.component';
import { InnovationDaysComponent } from './whatWeDoComponents/innovation-days/innovation-days.component';
import { ContactComponent } from './whatWeDoComponents/contact/contact.component';
import { FAQComponent } from './cookingSchoolComponents/faq/faq.component';
import { TermsAndConditionsComponent } from './cookingSchoolComponents/terms-and-conditions/terms-and-conditions.component';
import { TeamBuildingComponent } from './cookingSchoolComponents/team-building/team-building.component';
import { CookingSchoolComponent } from './cookingSchoolComponents/cooking-school/cooking-school.component';
import { CookingSchoolSlidesComponent } from './cookingSchoolComponents/cooking-school-slides/cooking-school-slides.component';
import { NewsItemsComponent } from './cookingSchoolComponents/news-items/news-items.component';
import { MoreCookingClassesComponent } from './cookingSchoolComponents/more-cooking-classes/more-cooking-classes.component';
import { CookingClassesMainViewComponent } from './cookingSchoolComponents/cooking-classes-main-view/cooking-classes-main-view.component';
import { HeaderComponent } from './homeComponents/header/header.component';
import { RecipeComponent } from './recipesComponent/recipe/recipe.component';
import { RecipeBannerComponent } from './recipesComponent/recipe-banner/recipe-banner.component';
import { RecipesDetailsComponent } from './recipesComponent/recipes-details/recipes-details.component';
import { RecipesSearchComponent } from './recipesComponent/recipes-search/recipes-search.component';
import { TestSliderComponent } from './homeComponents/test-slider/test-slider.component';
import { TestSlider1Component } from './homeComponents/test-slider1/test-slider1.component';
import { FilterPipe } from './filter.pipe';
import { KitchenInspirationSessionComponent } from './whatWeDoComponents/kitchen-inspiration-session/kitchen-inspiration-session.component';
import { FoodiesWorkshopComponent } from './whatWeDoComponents/foodies-workshop/foodies-workshop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SocialMediaComponent,
    HomeSecCardComponent,
    HomeFirstCardComponent,
    CookingClassesComponent,
    CookingSessionVideoComponent,
    HomeWelcomePageComponent,
    WhatWeDoVideoComponent,
    WhatWeDoCardsComponent,
    WhatWeDoComponent,
    MeetTheTeamComponent,
    MeetTheTeamCardsComponent,
    ChefInternProgramComponent,
    InnovationDaysComponent,
    ContactComponent,
    FAQComponent,
    TermsAndConditionsComponent,
    TeamBuildingComponent,
    CookingSchoolComponent,
    CookingSchoolSlidesComponent,
    NewsItemsComponent,
    MoreCookingClassesComponent,
    CookingClassesMainViewComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeBannerComponent,
    RecipesDetailsComponent,
    RecipesSearchComponent,
    TestSliderComponent,
    TestSlider1Component,
    FilterPipe,
    KitchenInspirationSessionComponent,
    FoodiesWorkshopComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
   ReactiveFormsModule,

  ],
schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

