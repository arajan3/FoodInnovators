import { Component } from '@angular/core';
const dataSource = require("../../../assets/json/FAQ.json");

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  faqs:any;

  ngOnInit(): void {
this.faqs=dataSource;
  }
}
