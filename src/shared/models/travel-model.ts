export interface Travel {
  continent: string;
  travelImage: string;
  userName: string;
  _id: number;
  userAssociatedVaccines: {
    nameVaccines: string;
    stateVaccines: boolean;
  }[];
  travelAssociatedVaccines: {
    nameVaccines: string;
    stateVaccines: boolean;
  }[];
}

export type TravelVaccines = {
  userName: string;
  continent: string;
  stayingRuralArea: boolean;
  chronicRespiratoryDisease: boolean;
  intentionHaveChildren: boolean;
  eggOrChickenProteinAllergy: boolean;
};
