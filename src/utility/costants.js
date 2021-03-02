export const GIT_ACCESS_TOKEN = "bbb7af4c87b0ed847a77cae817e7ed2a500f71fc";

export const USERS = [
  {
    user_id: 1,
    name: "Vivek",
    email: "vivek@gmail.com",
    password: "pass",
    contact: "123332123",
  },
  {
    user_id: 2,
    name: "Sajid",
    email: "sajidansari18@gmail.com",
    password: "pass",
    contact: "123332123",
  },
  {
    user_id: 3,
    name: "Asif",
    email: "asifansari18@gmail.com",
    password: "pass",
    contact: "123332123",
  },
];

export const PRODUCTS = () => {
  var prods = [];
  for (let i = 0; i < 25; i++) {
    prods.push({
      pid: i + 1,
      name: "Awesome Book" + i + 1,
      price: Math.floor(Math.random() * 999) + 20,
      description: "this is nice book",
      image_url: "https://picsum.photos/200/30" + i,
      discount: 10
    });
  }
  return prods;
};
