import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {

  public monedaOrigen: string[] = ['PESO ARGENTINO', 'USD', 'EURO'];
  public monto:number=0;
  public tengo:string = 'PESO ARGENTINO';
  public quiero: string = 'USD';
  public total:number=0;
  
  convertir() {
    if(this.tengo === 'USD' && this.quiero==='PESO ARGENTINO')
    {
      this.total = this.monto*468;
    }else if (this.tengo === 'PESO ARGENTINO' && this.quiero==='USD')
    {
      this.total = this.monto/468;
    }else if (this.tengo === 'PESO ARGENTINO' && this.quiero==='EURO')
    {
      this.total = this.monto/503;
    }else if (this.tengo === 'EURO' && this.quiero==='PESO ARGENTINO')
    {
      this.total = this.monto*503;
    }

  }
}
