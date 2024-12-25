const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    const subscriber = await prisma.subscribers.create({
      data: {
        subscriber_name: "john",
        subscriber_LastName: "doe",
        subscriber_email: "jdoe@gmail.com",
        subscriber_PhoneNumber: "242-232-3911",
      },
    });

    const cats = await prisma.cats.createMany({
      data: [
        {
          name: "Monkey",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
          img: "https://cdn2.thecatapi.com/images/9u0.jpg",
          subscriber_id: subscriber.id,
          voteCount: 0,
          // subscriber_email: "ejfkjwe024@gmail.com",
        },
        {
          name: "Avocado",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
          img: "https://cdn2.thecatapi.com/images/a03.jpg",
          subscriber_id: subscriber.id,
          voteCount: 0,
          // subscriber_PhoneNumber: "131-232-2492",
          // subscriber_email: "wowor092@gmail.com",
        },
        {
          name: "Mcdonald",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
          img: "https://cdn2.thecatapi.com/images/bho.jpg",
          subscriber_id: subscriber.id,
          voteCount: 0,
          // subscriber_PhoneNumber: "130-292-2302",
          // subscriber_email: "wjwijr@gmail.com",
        },
        {
          name: "Robert",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
          img: "https://cdn2.thecatapi.com/images/bqo.jpg",
          subscriber_id: subscriber.id,
          voteCount: 0,
          // subscriber_PhoneNumber: "130-022-2412",
          // subscriber_email: "wjwir@gmail.com",
        },
        {
          name: "Penelope",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
          img: "https://cdn2.thecatapi.com/images/eh8.jpg",
          subscriber_id: subscriber.id,
          voteCount: 0,
          // subscriber_PhoneNumber: "130-291-2902",
          // subscriber_email: "wjwwoi2jr@gmail.com",
        },
        {
          name: "Chicken",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
          img: "https://cdn2.thecatapi.com/images/MTk5NTYyNw.jpg",
          subscriber_id: subscriber.id,
          voteCount: 0,
          // subscriber_PhoneNumber: "131-349-0291",
          // subscriber_email: "whirr2-4@gmail.com",
        },
        {
          name: "Roger",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
          img: "https://cdn2.thecatapi.com/images/6vPgXY9tb.jpg",
          subscriber_id: subscriber.id,
          voteCount: 0,
          // subscriber_PhoneNumber: "131-920-0249",
          // subscriber_email: "wprowop3@gmail.com",
        },
        {
          name: "Taco-Bean",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1260px-June_odd-eyed-cat.jpg",
          subscriber_id: subscriber.id,
          voteCount: 0,
          // subscriber_PhoneNumber: "131--443-2325",
          // subscriber_email: "ouieh04@gmail.com",
        },
        {
          name: "Rice",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
          img: "https://images.all-free-download.com/images/graphiclarge/cat_feline_cats_eye_215231.jpg",
          subscriber_id: subscriber.id,
          voteCount: 0,
          // subscriber_PhoneNumber: "131-024-1096",
          // subscriber_email: "wkn-924@gmail.com",
        },
        {
          name: "Coco",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, rerum in deleniti error tenetur, accusantium temporibus cupiditate ab pariatur sunt dolore quisquam consectetur quia delectus aliquid mollitia, expedita nobis vel",
          img: "https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_640.jpg",
          subscriber_id: subscriber.id,
          voteCount: 0,

          // subscriber_PhoneNumber: "131-048-5402",
          // subscriber_email: "pkwola023@gmail.com",
        },
      ],
    });
    const createdCats = await prisma.cats.findMany({
      where: {
        subscriber_id: subscriber.id,
      },
    });
    // This is done because you cant access the newly created cats.id Metadata will only let you receive data that has already been affected. In this case the subscriber created each cat, therefore the subscriber data - pertaining to that sole subscriber, is new information in the database.

    const cocoCat = createdCats.find((cat) => cat.name === "Coco");

    const votes = await prisma.vote.create({
      data: {
        subscriberId: subscriber.id,
        catId: cocoCat.id,
      },
    });
  } catch (err) {
    throw err;
  }
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
