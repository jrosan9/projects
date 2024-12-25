const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.cats.createMany({
    data: [
      {
        name: "Monkey",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
        img: "https://cdn2.thecatapi.com/images/9u0.jpg",
        phone_number: "131-242-3191",
        email: "ejfkjwe024@gmail.com",
      },
      {
        name: "Avocado",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
        img: "https://cdn2.thecatapi.com/images/a03.jpg",
        phone_number: "131-232-2492",
        email: "wowor092@gmail.com",
      },
      {
        name: "Mcdonald",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
        img: "https://cdn2.thecatapi.com/images/bho.jpg",
        phone_number: "130-292-2302",
        email: "wjwijr@gmail.com",
      },
      {
        name: "Robert",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
        img: "https://cdn2.thecatapi.com/images/bqo.jpg",
        phone_number: "130-022-2412",
        email: "wjwir@gmail.com",
      },
      {
        name: "Penelope",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
        img: "https://cdn2.thecatapi.com/images/eh8.jpg",
        phone_number: "130-291-2902",
        email: "wjwwoi2jr@gmail.com",
      },
      {
        name: "Chicken",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
        img: "https://cdn2.thecatapi.com/images/MTk5NTYyNw.jpg",
        phone_number: "131-349-0291",
        email: "whirr2-4@gmail.com",
      },
      {
        name: "Roger",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
        img: "https://cdn2.thecatapi.com/images/6vPgXY9tb.jpg",
        phone_number: "131-920-0249",
        email: "wprowop3@gmail.com",
      },
      {
        name: "Taco-Bean",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1260px-June_odd-eyed-cat.jpg",
        phone_number: "131--443-2325",
        email: "ouieh04@gmail.com",
      },
      {
        name: "Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
        img: "https://images.all-free-download.com/images/graphiclarge/cat_feline_cats_eye_215231.jpg",
        phone_number: "131-024-1096",
        email: "wkn-924@gmail.com",
      },
      {
        name: "Coco",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
        img: "https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_640.jpg",
        phone_number: "131-048-5402",
        email: "pkwola023@gmail.com",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
