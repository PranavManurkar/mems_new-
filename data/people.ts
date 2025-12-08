import { Person } from "@/app/people/type";
import { staff } from "./staff";
import { faculty } from "./faculty";
import { students } from "./student";

// object array containing people data
export const people: Person[] = [
   ...faculty,
   ...staff,
    ...students,
];