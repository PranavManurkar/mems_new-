// data/staff.ts
import type { Person } from "@/app/people/type";

export const staff: Person[] = [
  {
    id: 101,
    name: "Mr. Brajesh Dwivedi",
    title: "Senior Assistant",
    specialization: "",           // unspecified -> empty string
    category: "staff",
    // field is intentionally omitted for staff (not applicable)
    image: "/staffimages/BrajeshDwivedi.png",
    email: "brajeshd@iiti.ac.in",
    // office: not given
    // phone: not given
    profiles: [],
  },
  {
    id: 102,
    name: "Mr. Kulbahadur Thapa",
    title: "Junior Attendant Grade II",
    specialization: "",
    category: "staff",
    image: "/staffimages/KulbahadurThapa.jpg",
    email: "kthapa@iiti.ac.in",
    profiles: [],
  },
  {
    id: 103,
    name: "Mr. Mahesh Chand Bairwa",
    title: "Junior Technical Superintendent",
    specialization: "",
    category: "staff",
    image: "/staffimages/MaheshChandBairwa.jpg",
    email: "maheshb@iiti.ac.in",
    profiles: [],
  },
  {
    id: 104,
    name: "Mr. Mayur Dhake",
    title: "Junior Technical Superintendent",
    specialization: "",
    category: "staff",
    image: "/staffimages/MayurDhake.jpg",
    email: "dhakemayur@iiti.ac.in",
    profiles: [],
  },
  {
    id: 105,
    name: "Mr. Pranjal Shrimali",
    title: "Junior Lab Assistant",
    specialization: "",
    category: "staff",
    image: "/staffimages/PranjalShrimal.png",
    email: "pshrimali@iiti.ac.in",
    profiles: [],
  },
  {
    id: 106,
    name: "Mr. Shubham Verma",
    title: "Junior Lab Attendant",
    specialization: "",
    category: "staff",
    image: "/staffimages/ShubhamVerma.jpg",
    email: "shubhamv@iiti.ac.in",
    profiles: [],
  },
]
