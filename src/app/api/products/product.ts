export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  images: {
    FV: string;
    BV: string;
    SV: string;
    POV: string;
  };
  price: string;
}
