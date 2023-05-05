export interface Travel {
  continent: string;
  travelImage: string;
  userName: string;
  _id: string;
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

export type TravelId = Pick<Travel, '_id'>;
