const products = [
  {
    id: "dswabdsk32848sdkjkjl",
    name: "realme Narzo 30",
    category: "electronics",
    price: 14999,
    rating: 4.4,
    imageURL:
      "https://rukminim1.flixcart.com/image/416/416/klgx0280/mobile/q/s/t/narzo-30-pro-5g-rmx2117-realme-original-imagyhbkzmtcfyyh.jpeg?q=70",
    description:
      "From playing arcade games to Multiplayer Online Battle Arena Gaming (MOBA) games, this smartphone can handle almost any large scale mobile gaming with ease",
  },
  {
    id: "wewewert656ghghgh",
    name: "Pigeon Handy Chopper ",
    category: "kitchen",
    price: 229,
    rating: 4.4,
    imageURL:
      "https://rukminim1.flixcart.com/image/416/416/kiyw9e80/chopper/p/u/k/handy-mini-chopper-pigeon-original-imafyn99tchfgvzs.jpeg?q=70",
    description:
      "Whether you want to prepare an amazing salad with assorted veggies or make a delicious vegetable recipe, this Pigeon Handy Vegetable Chopper will be your ideal kitchen helper. ",
  },
  {
    id: "34gertrewrweeg",
    name: "Bonsai Artificial Plant",
    category: "decorative",
    price: 199,
    rating: 4.0,
    imageURL:
      "https://rukminim1.flixcart.com/image/416/416/knxiavk0/artificial-plant/v/v/x/hard-green-artificial-plant-with-pot-cosmos-artificial-flower-original-imag2hvhwefjqyvg.jpeg?q=70",
    description:
      "Soft Real Looking artificial wild plant with Real Artificial pot can be used for Office Home Car indoor and outdoor purpose",
  },
  {
    id: "heifsklfsdlfmsdl;fm",
    name: "Dark Blue Dress",
    category: "women wear",
    price: 494,
    rating: 4.1,
    imageURL:
      "https://rukminim1.flixcart.com/image/800/960/kkk1vgw0/dress/n/t/k/m-dress-176-absorbing-original-imafzvnz6mypgesg.jpeg?q=50",
    description: "Its a very comfy wear.....",
  },
  {
    id: "kwdhf3488",
    name: "Infinix Smart 4 Plus",
    category: "Electonics",
    price: 11000,
    rating: 4.4,
    imageURL:
      "https://rukminim1.flixcart.com/image/416/416/kctf0cw0/mobile/y/g/h/infinix-smart-4-plus-x680d-original-imaftv9ubyzwg7tc.jpeg?q=70",
    description:
      "The Infinix Smart 4 Plus is a high-performing smartphone that can change the way you do your everyday tasks by using different apps.",
  },
  {
    id: "dfhzhzftnzfn",
    name: "Dude Perfect",
    category: "Book",
    price: 3500,
    rating: 4.4,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51UqHNa+urS._SX318_BO1,204,203,200_.jpg",
    description:
      "At Dude Perfect, we do everything we can to bring families closer together, and that’s why we’re excited to share this book with you.",
  },
  {
    id: "grsed454tyff",
    name: "Fire TV Stick",
    category: "Amazon Devices",
    price: 3999,
    rating: 4.5,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/616NnbRWeRS._SL1000_.jpg",
    description:
      "At Dude Perfect, we do everything we can to bring families closer together, and that’s why we’re excited to share this book with you.",
  },
  {
    id: "forzza",
    name: "Queen Bed",
    category: "furniture",
    price: 11699,
    rating: 3.6,
    imageURL:
      "https://rukminim1.flixcart.com/image/416/416/k5ihzm80/bed/z/u/a/king-na-particle-board-fo-jaskbox-01-forzza-wenge-original-imafz6eusufcdqgk.jpeg?q=70",
    description:
      "This eco-friendly engineered-wood bed from Forzza not only bolsters your mattress, but it also enhances your bedroom’s decor. Thanks to its laminate finish, the bed is well-protected from scratches and dust so it looks new for a long time.",
  },
  {
    id: "dfhgfsdfghhgfhfgjfgjhgnfgjgf",
    name: "LG Gaming Monitor",
    category: "Electronics",
    price: 25999,
    rating: 4.5,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/91gpmhtA%2BKL._SL1500_.jpg",
    description:
      "The ultra-thin bezel on three sides of this streamlined display offers a virtually borderless visual experience, without distraction from the precise, gorgeous image. A sleek addition to any desktop.",
  },
  {
    id: "NDUIWGSJASDIUD;fm",
    name: "Sofa",
    category: "furniture",
    price: 19499,
    rating: 4.7,
    imageURL:
      "https://rukminim1.flixcart.com/image/416/416/kpr8k280/sofa-sectional/9/9/g/right-facing-blue-polycotton-nano-blue-new-bharat-lifestyle-blue-original-imag3xy7gfbdvhsf.jpeg?q=70",
    description: "Sofa set is very nice....",
  },
  {
    id: "1",
    name: "Clothes for Sai",
    category: "Work Wear",
    price: 150000,
    rating: 5,
    imageURL: "https://d17a17kld06uk8.cloudfront.net/products/KE84XU9/K3WJ2MFR-large.webp",
    description:
      " Thanks so much, you are blessed. Looking good and great is what we stand for",
  },
];

export function findById(id) {
    return products.find(product => product.id === id);
}

export default products;
