import { AUTO_STYLE } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component, createComponent, createPlatform, ɵisBoundToModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Vaper_Library';
  serverElemnent = {
    type: 'string',
    name: 'testserver',
    content: 'just a tetst',
  };

  // Video Game
  // - title
  // - addedDate
  // - Details

  videoGames: {
    title: string;
    creator: string;
    details: string;
  }[] = [
    {
      title: 'Super Mario Bros',
      creator: 'Nintendo',
      details:
        'Italian brothers trying to save a princess from a big lizard/tutrle.',
    },
    {
      title: 'Rainbow Six Siege',
      creator: 'Ubisoft',
      details: 'Multiplayer siege shooter.',
    },
  ];

  onAddGame(gameForm) {
    console.log(gameForm.value);


    console.log(gameForm.value.title)
    console.log(gameForm.value.creator)
    console.log(gameForm.value.details)

    this.videoGames.push({title:gameForm.value.title,creator:gameForm.value.creator,details:gameForm.value.details})
  }

  deleteGame(index:number){
    if(index>-1){
      this.videoGames.splice(index,1)
    }
  }
editGame(){
  
}

}




export class card_components {
  public name: String;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
