export interface ProductColor {
  colorNames?: string[];
  colorCodes?: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  additionalDescription?: string;
  colors?: ProductColor;
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
