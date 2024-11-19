import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/models/categorie';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  @Input() data!: Category;

  // @Input({ required: true }) title!: string;
  // @Input({ transform : (value:string)=> parseInt(value) }) title!: number;
  @Input({ alias: 't' }) title!: string;

  @Output() d = new EventEmitter();

  deleteChild() {
    this.d.emit(this.data.id);
  }
}
