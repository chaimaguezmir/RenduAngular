import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/categorie';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css'],
})
export class FormCategoryComponent implements OnInit {
  constructor(private activated:ActivatedRoute){}
  category!: Category;
  ngOnInit(): void {
    this.category = new Category();
    this.activated.params.subscribe({
      next: (param) => { 
        if (param['objet'] != undefined) {
          console.debug(param);
          console.log(JSON.parse(param['objet']))
          this.category = JSON.parse(param['objet'])
        }
      }
    }  
    );
  }

  add(f: any, title: any) {
    this.category.available = true;
    console.log(this.category);
    console.log(f);
    console.log(title)
  }
}
