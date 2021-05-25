import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Carta } from './carta';
import { CartaService } from './carta.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styles: [
  ]
})
export class PaginaComponent implements OnInit {

  usuario: string;
  cartas: Carta[];

  constructor(
    private cartaService: CartaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  buscarCartas () {
    this.activatedRoute.paramMap.subscribe(params => {
      let pagina: number = +params.get('page');
      if (!pagina) {
        pagina = 0;
      }
      this.cartaService.getCartas(this.usuario, pagina).subscribe(response => {
        this.cartas = response.content as Carta[];
      })
    })
  }
}

/*
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginador-vehiculo',
  templateUrl: './paginador-vehiculo.component.html',
  styleUrls: ['./paginador-vehiculo.component.css']
})
export class PaginadorVehiculoComponent implements OnInit {

  @Input() paginador:any;

  paginas: number[];

  desde:number;

  hasta:number;

  constructor() { }

  ngOnInit(): void {
    this.initPaginator();
  }

  ngOnChanges(changes: SimpleChanges){
    let paginadorActualizado=changes['paginador'];
    if(paginadorActualizado.previousValue){
      this.initPaginator();
    }
  }

  private initPaginator():void{
    this.desde=Math.min(Math.max(1,this.paginador.number-2),this.paginador.totalPages-5);
    this.hasta=Math.max(Math.min(this.paginador.totalPages,this.paginador.number+4),7);
    if(this.paginador.totalPages>5){
      this.paginas=new Array(this.hasta-this.desde+1).fill(0).map((_valor,indice)=>indice+this.desde);
    }else{
    this.paginas=new Array(this.paginador.totalPages).fill(0).map((_valor,indice)=>indice+1);
    }
  }

}

*/
