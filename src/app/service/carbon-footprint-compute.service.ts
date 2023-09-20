import { Injectable } from '@angular/core';

@Injectable()
export class CarbonFootprintComputeService {
  constructor() { }

  voyages: any[] = [
  ]

  getVoyages() {
    return this.voyages;
  }

  addVoyage(voyage: { distanceKm: number, consommationPour100Km: number }) {
    this.voyages.push({
      distanceKm: voyage.distanceKm,
      consommationPour100Km: voyage.consommationPour100Km,
      co2: (voyage.distanceKm * voyage.consommationPour100Km) / 100 * 2.3
    });
  }

  getResumeVoyages() {
    if (this.voyages.length === 0) {
      return {
        distanceKm: 0,
        consommationPour100Km: 0,
        quantiteCO2Totale: 0
      }
    }else {
      return {
        distanceKm: this.voyages.reduce((total, voyage) => total + voyage.distanceKm, 0),
        consommationPour100Km: this.voyages.reduce((total, voyage) => total + voyage.consommationPour100Km, 0) / this.voyages.length,
        quantiteCO2Totale: this.voyages.reduce((total, voyage) => total + voyage.co2, 0)
      }
    }
  }
}
