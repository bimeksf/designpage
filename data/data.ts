interface Product  {
    id:string,
    title: string,
    description: string
    url:string
}


export const products :Product [] = [
  {
    id: "1",
    title: "3D Texture",
    description: "Lorem ipsum dolor sit amet consecteturorum ullam, illum a quasi facilis facere voluptatum dignissimos molestias aspernatur eligendi consectetur? Praesentium autem fugiat reiciendis?.",
    url:"/3d.jpg"
  },
  {
    id: "2",
    title: "Mobile mockup",
    description: "Lorem ipsum dolor sit amet consecteturorum ullam, illum a quasi facilis facere voluptatum dignissimos molestias aspernatur eligendi consectetur? Praesentium autem fugiat reiciendis?",
      url:"/mobile.jpg"
  },
  {
    id: "3",
    title: "Laptop Mockup",
    description: "Lorem ipsum dolor sit amet consecteturorum ullam, illum a quasi facilis facere voluptatum dignissimos molestias aspernatur eligendi consectetur? Praesentium autem fugiat reiciendis? mockupy pro prezentace UI.",
      url:"/lap.jpg"
  },
];