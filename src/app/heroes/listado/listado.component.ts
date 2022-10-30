import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  // styleUrls: ['./listado.component.css']
})
// export class ListadoComponent implements OnInit {
export class ListadoComponent {  

  // constructor() {
  //   console.log('constructor');
  //  }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }
  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor','Capitan America'];
  heroeBorrado: string | undefined = '';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift();    
  }
}
