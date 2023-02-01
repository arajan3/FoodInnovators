import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookingClassesComponent } from './homeComponents/cooking-classes/cooking-classes.component';
import { CookingSessionVideoComponent } from './homeComponents/cooking-session-video/cooking-session-video.component';
import { FooterComponent } from './homeComponents/footer/footer.component';
import { HomeFirstCardComponent } from './homeComponents/home-first-card/home-first-card.component';
import { HomeSecCardComponent } from './homeComponents/home-sec-card/home-sec-card.component';
import { HomeWelcomePageComponent } from './homeComponents/home-welcome-page/home-welcome-page.component';
import { HomeComponent } from './homeComponents/home/home.component';
import { SocialMediaComponent } from './homeComponents/social-media/social-media.component';
import { WhatWeDoVideoComponent } from './whatWeDoComponents/what-we-do-video/what-we-do-video.component';
import { WhatWeDoCardsComponent } from './whatWeDoComponents/what-we-do-cards/what-we-do-cards.component';
import { WhatWeDoComponent } from './whatWeDoComponents/what-we-do/what-we-do.component';
import { MeetTheTeamCardsComponent } from './whatWeDoComponents/meet-the-team-cards/meet-the-team-cards.component';
import { ChefInternProgramComponent } from './whatWeDoComponents/chef-intern-program/chef-intern-program.component';
import { InnovationDaysComponent } from './whatWeDoComponents/innovation-days/innovation-days.component';
import { ContactComponent } from './whatWeDoComponents/contact/contact.component';
import { FAQComponent } from './cookingSchoolComponents/faq/faq.component';
import { TermsAndConditionsComponent } from './cookingSchoolComponents/terms-and-conditions/terms-and-conditions.component';
import { TeamBuildingComponent } from './cookingSchoolComponents/team-building/team-building.component';
import { CookingSchoolComponent } from './cookingSchoolComponents/cooking-school/cooking-school.component';
import { NewsItemsComponent } from './cookingSchoolComponents/news-items/news-items.component';
import { CookingClassesMainViewComponent } from './cookingSchoolComponents/cooking-classes-main-view/cooking-classes-main-view.component';
import { MeetTheTeamComponent } from './whatWeDoComponents/meet-the-team/meet-the-team.component';
import { HeaderComponent } from './homeComponents/header/header.component';
import { RecipeBannerComponent } from './recipesComponent/recipe-banner/recipe-banner.component';
import { RecipeComponent } from './recipesComponent/recipe/recipe.component';
import { RecipesDetailsComponent } from './recipesComponent/recipes-details/recipes-details.component';
import { RecipesSearchComponent } from './recipesComponent/recipes-search/recipes-search.component';
import { TestSlider1Component } from './homeComponents/test-slider1/test-slider1.component';
import { TestSliderComponent } from './homeComponents/test-slider/test-slider.component';

const routes: Routes = [

  {
    //main home page view
    path: "foodInnovators",
    component: HomeComponent,
  },
  {
    path: "footer",
    component: FooterComponent,
  },
  {
    path: "header",
    component: HeaderComponent,
  },
  {
    path: "social",
    component: SocialMediaComponent,
  },
  {
    path: "homeSecCard",
    component: HomeSecCardComponent,
  },
  {
    path: "homeFirstCard",
    component: HomeFirstCardComponent,
  },
 
  {
    path: "cookingSessionVideo",
    component: CookingSessionVideoComponent,
  },
  {
    path: "welcomePage",
    component: HomeWelcomePageComponent,
  },


  {
    path: "whatWeDoVideo",
    component: WhatWeDoVideoComponent,
  },
  {
    path: "whatWeDoCards",
    component: WhatWeDoCardsComponent,
  },
  {
    path: "whatWeDo",
    component: WhatWeDoComponent,
  },
  {
    path: "meetTheTeam",
    component: MeetTheTeamComponent,
  },
  {
    path: "chefInternProgram",
    component: ChefInternProgramComponent,
  },
  {
    path: "InnovationDays",
    component: InnovationDaysComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "FAQ",
    component: FAQComponent,
  },
  {
    path: "termsAndConditions",
    component: TermsAndConditionsComponent,
  },
  {
    path: "teamBuilding",
    component: TeamBuildingComponent,
  },
  {
    path: "cookingSchool",
    component: CookingSchoolComponent,
  },
  {
    path: "news-items",
    component: NewsItemsComponent,
  },
  {
    path: "cookingClasses",
    component: CookingClassesMainViewComponent,
  },
  {
    path: "recipes",
    component: RecipeComponent,
  },
  {
    path: "recipesDetails",
    component: RecipesDetailsComponent,
  },
  {
    path: "recipesSearch/:id",
    component: RecipesSearchComponent,
  },
  {
    path: "test",
    component: TestSliderComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
