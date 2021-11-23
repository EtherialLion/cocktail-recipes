import {Component} from '@angular/core';
import {CocktailService} from "./services/cocktail.service";
import {CocktailDialogComponent} from "./cocktail-dialog/cocktail-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cocktails: any[] = [];

  constructor(
    private cocktailService: CocktailService,
    public dialog: MatDialog,
  ) {}

  getCocktail(name: string){
    this.cocktailService.getCocktailInfo(name).subscribe(result => {
      this.cocktails = result?.drinks;
      console.log(this.cocktails);
    })
  }

  openDialog(cocktail: any) {
    this.dialog.open(CocktailDialogComponent, {
      data: cocktail,
    });
  }
}
