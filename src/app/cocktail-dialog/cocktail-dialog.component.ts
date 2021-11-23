import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Ingridient} from "./ingridients.interface";

@Component({
  selector: 'app-cocktail-dialog',
  templateUrl: './cocktail-dialog.component.html',
  styleUrls: ['./cocktail-dialog.component.scss']
})
export class CocktailDialogComponent implements OnInit {
  ingridients: Ingridient[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    for (let i = 1; i <= 15; i++) {
      const ingridient = this.data['strIngredient' + i];
      const measure = this.data['strMeasure' + i];

      if (ingridient || measure) {
        this.ingridients.push({ingridient, measure})
      }
    }
    console.log(this.ingridients);
  }

}
