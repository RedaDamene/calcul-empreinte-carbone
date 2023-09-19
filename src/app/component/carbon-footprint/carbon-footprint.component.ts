import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})
export class CarbonFootprintComponent {

  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ]

  distanceKm: number = this.totalDistanceOfVoyages();
  consommationPour100Km: number = this.moyenneConsommation();

  consommationTotale: number = (this.distanceKm * this.consommationPour100Km / 100);

  onClickKm($event: MouseEvent) {
    this.distanceKm += 100;
  }

  addTravel($event: MouseEvent) {
    this.voyages.push({
      distanceKm: Math.round(Math.random() * (800 - 50) + 50),
      consommationPour100Km: Math.round(Math.random() * (10 - 1) + 1)
    });

    this.distanceKm = this.totalDistanceOfVoyages();
    this.consommationPour100Km = this.moyenneConsommation();
    this.consommationTotale = (this.distanceKm * this.consommationPour100Km / 100);
  }

  totalDistanceOfVoyages() {
    return this.voyages.reduce((total, voyage) => total + voyage.distanceKm, 0);
  }

  moyenneConsommation() {
    return this.voyages.reduce((total, voyage) => total + voyage.consommationPour100Km, 0) / this.voyages.length;
  }
}
