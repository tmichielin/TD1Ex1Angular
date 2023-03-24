import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Titre de mon application ';

  nom:string = "Jean";

  verif:boolean = false;

  element:number=1;

  etudiants:any[] = [
    {"nom":"Dupont", "prenom":"Louis", "age":28},
    {"nom":"Dupond", "prenom":"André", "age":24},
    {"nom":"Lefebvre", "prenom":"Julie", "age":32},
    {"nom":"Dumont", "prenom":"Marie-Louise", "age":23}
  ]

  choixClasse(isFirst:boolean, isLast:boolean, isEven:boolean)
  {
    var ma_classe:string="";
    if(isFirst || isLast)
    {
      ma_classe = "first_last";
    }
    if(isEven)
    {
      ma_classe += "ligne_pair";
    }
    else
    {
      ma_classe += "ligne_impair"
    }
    return ma_classe;
    
  }

}
