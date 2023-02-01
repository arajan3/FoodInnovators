import { Component, HostListener } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const dataSource = require("../../../assets/json/header.json");

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {



  filterClass= '';
  header: any;


  openSearchContainer(){
    this.filterClass ='open'
  }
  closeSearchContainer(){
    this.filterClass =''

  }

  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }



//Summary
//We have use.
//scroll event
//function
//ng class property binding
//Hostlistener the main part, if u dont understand plz study about hostlistener
//if condition
//window.scrollY
  ngOnInit(): void {
    this.header=dataSource[0];
   
  }

 }




  $(document).ready(function() {
    $('#item1').click(function() {
      $("#item1").addClass("open")
          $('.item2').slideToggle();
     });
    });


    $(document).ready(function() {
    
      $('#hamburger-menu').click(function() {
        console.log("test header")
        $("#aem-navbar").toggleClass("menu-open")
         $(".hamburger-menu").removeClass('fa-bars')
    
        
             $('#navbarSupportedContent2').slideToggle();
       });
      });

      $(document).ready(function() {
    
        $('#hamburger-menu').click(function() {
          console.log("test headeree")
          //$(".hamburger-menu1").show()
          $("#hamburger-menu1").addClass('fa-times')
          
               $('#navbarSupportedContent2').slideToggle();
         });
        });
  

