import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {CarbonFootprintComputeService} from "../../service/carbon-footprint-compute.service";

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})
export class CarbonFootprintComponent {

  constructor(private voyageService: CarbonFootprintComputeService) {

  }

  voyages: any[] = this.voyageService.getVoyages();
  resumeVoyages: any = this.voyageService.getResumeVoyages();
  // distanceKm: number = this.totalDistanceOfVoyages();
  // consommationPour100Km: number = this.moyenneConsommation();

  consommationTotale: number = (this.resumeVoyages.distanceKm * this.resumeVoyages.consommationPour100Km / 100);

  onClickKm($event: MouseEvent) {
    this.resumeVoyages.distanceKm += 100;
  }

  addTravel($event: MouseEvent) {
    this.voyageService.addVoyage({
      distanceKm: Math.round(Math.random() * (800 - 50) + 50),
      consommationPour100Km: Math.round(Math.random() * (10 - 1) + 1)
    });

    this.resumeVoyages = this.voyageService.getResumeVoyages();
    this.consommationTotale = (this.resumeVoyages.distanceKm * this.resumeVoyages.consommationPour100Km / 100);
  }

  totalDistanceOfVoyages() {
    return this.voyages.reduce((total, voyage) => total + voyage.distanceKm, 0);
  }

  moyenneConsommation() {
    return this.voyages.reduce((total, voyage) => total + voyage.consommationPour100Km, 0) / this.voyages.length;
  }
}
