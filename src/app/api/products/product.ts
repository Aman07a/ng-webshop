export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  additionalDescription?: string;
  colors?: string[];
  features?: string[];
  images: {
    BV: string;
    FV: string;
    POV: string;
    SV: string;
  };
  material?: string;
  merch?: string;
  origin?: string;
  size?: string;
}
