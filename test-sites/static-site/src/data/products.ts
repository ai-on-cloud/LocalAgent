export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: "Alpha Widget", category: "Widgets", price: 29.99, description: "A versatile alpha-class widget for everyday tasks." },
  { id: 2, name: "Beta Gadget", category: "Gadgets", price: 49.99, description: "Next-generation beta gadget with improved performance." },
  { id: 3, name: "Gamma Widget", category: "Widgets", price: 19.99, description: "Budget-friendly gamma widget, great for beginners." },
  { id: 4, name: "Delta Connector", category: "Connectors", price: 9.99, description: "Universal delta connector, compatible with all ports." },
  { id: 5, name: "Epsilon Sensor", category: "Sensors", price: 79.99, description: "High-precision epsilon sensor for industrial use." },
  { id: 6, name: "Zeta Gadget", category: "Gadgets", price: 59.99, description: "Premium zeta gadget with wireless charging." },
  { id: 7, name: "Eta Widget", category: "Widgets", price: 34.99, description: "Mid-range eta widget with extended warranty." },
  { id: 8, name: "Theta Board", category: "Boards", price: 124.99, description: "Development theta board for prototyping projects." },
  { id: 9, name: "Iota Sensor", category: "Sensors", price: 64.99, description: "Compact iota sensor for temperature monitoring." },
  { id: 10, name: "Kappa Connector", category: "Connectors", price: 14.99, description: "High-speed kappa connector for data transfer." },
];
