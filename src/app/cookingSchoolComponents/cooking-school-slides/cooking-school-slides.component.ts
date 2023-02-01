import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
const licenseDocs = require("../../../assets/json/recipes.json");

@Component({
  selector: 'app-cooking-school-slides',
  templateUrl: './cooking-school-slides.component.html',
  styleUrls: ['./cooking-school-slides.component.css']
})
export class CookingSchoolSlidesComponent {
  searchText:any;
 
  modalTitle: any = {};
  recipes:any;
  recipeType: any;
  checked: any;
  list = [
    {
      id: 1,
      title: 'Lunch',
      checked: false,
    },
    {
      id: 2,
      title: 'Baking',
      checked: false,
    },
    {
      id: 3,
      title: 'Snacks',
      checked: false,
    },
    {
      id: 4,
      title: 'Dessert',
      checked: false,
    },
    {
      id: 5,
      title: 'Salads',
      checked: false,
    },
    {
      id: 6,
      title: 'Dinner',
      checked: false,
    },
    {
      id: 7,
      title: 'Breakfast',
      checked: false,
    },
  ]

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.recipeType = this.actRoute.snapshot.paramMap.get('id');
 

    console.log(this.recipes,this.recipeType)
this.recipes=licenseDocs;
this.searchCall('loadmore')
console.log("data",this.recipes)
this.setFilter();
  }
  //chechbox filter
setFilter(){
  for (let item of this.list) {
    if(item.id==this.recipeType){
      item.checked=true;
    }
  }
   this.recipes.filter((item: { checked: any; })=> item.checked);
  // this.checked=this.recipeType;
  console.log(this.recipes,this.recipeType)

}

 
  statusClass = '';
  filterClass= '';
  loadmore='';

  openFilterContainer(){
    this.statusClass = 'open';
    this.filterClass ='hideFilterButton'
  }
  closeFilterContainer(){
    this.statusClass = '';
    this.filterClass =''

  }
   loadMoreBtn = document.querySelector('#btnLoadMorePromap');
   currentItem = 3;

  // loadmore function
  searchCall(loadmore:any){
    $( document ).ready(function () {
  $(".moreBox").slice(0, 3).show();
    if ($(".blogBox:hidden").length != 0) {
      $("#btnLoadMorePromap").show();
    }   
    $("#btnLoadMorePromap").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 0).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#btnLoadMorePromap").fadeOut('slow');
      }
    });
  });
  }
  checkBoxCall(title:any){
console.log("this is title",title)
  }


}




