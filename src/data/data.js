const columns = [
  { name: "NAME", uid: "name" },
  { name: "ROLE", uid: "role" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

const listMenu = [
  {
    name: "HOME",
    path: "/",
    icon: "home",
  },
  {
    name: "Products",
    path: "/dashboard/products",
    icon: "list",
  },
  {
    name: "Table",
    path: "/table",
    icon: "list",
  },
  {
    name: "Form Input",
    path: "/forminput",
    icon: "list",
  },
];

const animals = [
  { label: "Cat", value: "cat", description: "The second most popular pet in the world" },
  { label: "Dog", value: "dog", description: "The most popular pet in the world" },
  { label: "Elephant", value: "elephant", description: "The largest land animal" },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  { label: "Giraffe", value: "giraffe", description: "The tallest land animal" },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  { label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds" },
  { label: "Zebra", value: "zebra", description: "A several species of African equids" },
  {
    label: "Shark",
    value: "shark",
    description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  { label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae" },
  { label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile" },
];

export { columns, users, listMenu, animals };
