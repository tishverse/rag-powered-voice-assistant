import aerobook from "@/assets/aerobook.jpg";
import pulsewatch from "@/assets/pulsewatch.jpg";
import echobuds from "@/assets/echobuds.jpg";
import novaspeaker from "@/assets/novaspeaker.jpg";
import visionpad from "@/assets/visionpad.jpg";
import voltcharge from "@/assets/voltcharge.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  specs: string[];
  price: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "aerobook-x14",
    name: "AeroBook X14",
    tagline: "Ultra-thin. Ultra-powerful.",
    description: "A 14-inch performance laptop crafted from recycled aluminum with an all-day battery and stunning OLED display.",
    specs: ["14\" 3K OLED 120Hz", "M-Series Chip · 16GB", "512GB SSD · 18h battery"],
    price: "$1,499",
    image: aerobook,
    category: "Laptops",
  },
  {
    id: "pulsewatch-pro",
    name: "PulseWatch Pro",
    tagline: "Your health, in focus.",
    description: "Advanced fitness and health tracking with ECG, SpO2, sleep insights, and a titanium case.",
    specs: ["Always-on AMOLED", "ECG + SpO2 + GPS", "7-day battery · 10ATM"],
    price: "$399",
    image: pulsewatch,
    category: "Wearables",
  },
  {
    id: "echobuds-max",
    name: "EchoBuds Max",
    tagline: "Silence the world. Amplify life.",
    description: "Adaptive noise cancellation earbuds with spatial audio and 36-hour case battery.",
    specs: ["Adaptive ANC", "Spatial audio + Hi-Res", "36h with case · IP54"],
    price: "$249",
    image: echobuds,
    category: "Audio",
  },
  {
    id: "novaspeaker-mini",
    name: "NovaSpeaker Mini",
    tagline: "Room-filling sound.",
    description: "A compact smart speaker with 360° audio, built-in AI assistant, and smart home control.",
    specs: ["360° acoustic driver", "Voice + smart home hub", "WiFi 6 · Bluetooth 5.3"],
    price: "$179",
    image: novaspeaker,
    category: "Smart Home",
  },
  {
    id: "visionpad-11",
    name: "VisionPad 11",
    tagline: "Create. Anywhere.",
    description: "An 11-inch tablet with a laminated display, pencil support, and desktop-class performance.",
    specs: ["11\" 2.5K Liquid display", "M-Series Chip · 8GB", "Pencil + Keyboard ready"],
    price: "$799",
    image: visionpad,
    category: "Tablets",
  },
  {
    id: "voltcharge-65w",
    name: "VoltCharge 65W",
    tagline: "Charge everything, faster.",
    description: "GaN III fast charger with dual USB-C and USB-A ports for laptops, phones, and wearables.",
    specs: ["65W GaN III", "2× USB-C + 1× USB-A", "Foldable · MFi certified"],
    price: "$59",
    image: voltcharge,
    category: "Accessories",
  },
];
