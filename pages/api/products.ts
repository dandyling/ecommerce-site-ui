// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export type ColorType = "Pink" | "Blue" | "Beige" | "Gray" | "Black" | "Orange" | "Brand" | "Panel" | "Accent" | "White"

export type ProductType = "Clothes" | "Shoes"

export const Color: Record<ColorType, string> = {
  Pink: "#ff00b1",
  Blue: "#0091ff",
  Beige: "#f3ebe9",
  Gray: "#5c6780",
  Black: "#2d303f",
  Orange: "#fb484d",
  Brand: "#7820fa",
  Panel: "#feffff",
  Accent: "#fc3c3e",
  White: "rgb(252, 255, 255)"
}

export type ClothesSize = "S" | "M" | "L"

export type ShoesSize = "38" | "39" | "40" | "41" | "42"

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  images: string[];
  coverIndex: number;
  rating: number;
  discount: number;
  sku: string;
  brand: string;
  price: number;
  originalPrice: number;
  colors: ColorType[];
  colorIndex: number;
  sizes: ClothesSize[] | ShoesSize[];
  sizeIndex: number;
}

const products: Product[] = [{
  id: "bcd23170-ee66-418f-ad2f-4b547b67aea1",
  name: "White Traditional Long Dress",
  type: "Clothes",
  images: [
    "https://dynamic.zacdn.com/Yeor8h5Wx_nUgtQ0YzZK_xuAUdE=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/lowrys-farm-2683-5300842-1.jpg",
    "https://dynamic.zacdn.com/Oiitv6ls_xnUcnBIzlHZGqhdIso=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/lowrys-farm-0256-5300842-2.jpg",
    "https://dynamic.zacdn.com/tEfplcLRj4xOCxVhWNObjirsEfo=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/lowrys-farm-2683-5300842-3.jpg",
    "https://dynamic.zacdn.com/AMc7mTA-yiCFty_XJwoHWrzW7DE=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/lowrys-farm-2684-5300842-4.jpg",
  ],
  coverIndex: 0,
  rating: 4.8,
  discount: 0.25,
  sku: "00012C-23",
  brand: "Brandname",
  price: 3.99,
  originalPrice: 5.99,
  colors: ["Beige", "Pink", "Blue"],
  sizes: ["S", "M", "L"],
  colorIndex: 0,
  sizeIndex: 0,
}, {
  id: "4ff34c07-97bf-46e9-be80-ee48fd185f89",
  name: "Long Sleeve Denim Jacket",
  type: "Clothes",
  images: [
    "https://dynamic.zacdn.com/27j5bJMT_Vzscdw4s-QZPCszoRw=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/london-rag-0718-3879902-1.jpg",
    "https://dynamic.zacdn.com/UYnz4POLAqEs9wiLH13FRQUD4oA=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/london-rag-0718-3879902-2.jpg",
    "https://dynamic.zacdn.com/LFCRW3BBncye2R839pn--k8UKb0=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/london-rag-0718-3879902-3.jpg",
    "https://dynamic.zacdn.com/JYtDCUOYAxjxMNRb54UHns59p-I=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/london-rag-0718-3879902-4.jpg",
    "https://dynamic.zacdn.com/leH-G9yIED9ntGIU3XAlalUt7B0=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/london-rag-0719-3879902-5.jpg",
  ],
  coverIndex: 0,
  rating: 4.5,
  discount: 0.25,
  sku: "000NBC-23",
  brand: "Brandname",
  price: 3.99,
  originalPrice: 5.99,
  colors: ["Gray", "Black"],
  sizes: ["M", "L"],
  colorIndex: 0,
  sizeIndex: 0,
}, {
  id: "c6c8d239-812f-4e94-b63d-e9ffb5d7b185",
  name: "Hush Puppies",
  type: "Shoes",
  images: [
    "https://dynamic.zacdn.com/wpIgfbKdar67IT0nOtStw7_C-lI=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/hush-puppies-8913-0833242-1.jpg",
    "https://dynamic.zacdn.com/1U0hmma_AsvYeRQoh6RUyAJwoNw=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/hush-puppies-8913-0833242-2.jpg",
    "https://dynamic.zacdn.com/eQaTV5vO8bzJMt9GTgsYmsHBKXo=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/hush-puppies-8913-0833242-3.jpg",
    "https://dynamic.zacdn.com/jo0pJkXfxBgAAkdCis4oXLaQDPU=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/hush-puppies-8914-0833242-4.jpg",
  ],
  coverIndex: 0,
  rating: 4.8,
  discount: 0.25,
  sku: "012NBC-23",
  brand: "Brandname",
  price: 3.99,
  originalPrice: 5.99,
  colors: ["Beige", "Black", "Orange"],
  sizes: ["41", "40", "39", "38"],
  colorIndex: 0,
  sizeIndex: 0,
}, {
  id: "a3124db9-98d1-4105-be22-3c6f180e383b",
  name: "Athens Skirt",
  type: "Clothes",
  images: [
    "https://dynamic.zacdn.com/TCWEmi1F1v8Iw2hTD_Pd9cCHP6U=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/ck-calvin-klein-0937-7896042-1.jpg",
    "https://dynamic.zacdn.com/mjFcfIjYi1YRHDfrf1GegwdUXys=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/ck-calvin-klein-0938-7896042-2.jpg",
    "https://dynamic.zacdn.com/u6r96BTDQDUGfPNArzr9bTpQdNs=/fit-in/762x1100/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/ck-calvin-klein-0938-7896042-3.jpg",
  ],
  coverIndex: 0,
  rating: 4.8,
  discount: 0.25,
  sku: "000NBC-23",
  brand: "Brandname",
  price: 3.99,
  originalPrice: 5.99,
  colors: ["Beige", "Pink", "Blue"],
  sizes: ["S", "M", "L"],
  colorIndex: 0,
  sizeIndex: 0,
},]

export default (req, res) => {
  res.status(200).json(products)
}
