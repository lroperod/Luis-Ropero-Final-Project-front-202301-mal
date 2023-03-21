export interface Continent {
  nameContinent: string;
  imageURL: string;
  alt: string;
}

export const continents: Continent[] = [
  {
    nameContinent: 'Asia',
    imageURL: 'assets/images-home/asia.webp',
    alt: 'image-asia',
  },
  {
    nameContinent: 'África',
    imageURL: 'assets/images-home/africa.webp',
    alt: 'image-africa',
  },
  {
    nameContinent: 'América',
    imageURL: 'assets/images-home/america.webp',
    alt: 'image-america',
  },
];
