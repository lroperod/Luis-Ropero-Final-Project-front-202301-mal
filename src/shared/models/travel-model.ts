export interface Travel {
  continent: string;
  travelImage: string;
  travelCreator: string;
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
