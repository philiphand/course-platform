import { Course, Module } from "../types";
import module1 from "./module_1";
import module2 from "./module_2";
import module3 from "./module_3";
import module4 from "./module_4";
import module5 from "./module_5";
import module6 from "./module_6";

const modules: Module[] = [
    module1,
    module2,
    module3,
    module4,
    module5,
    module6
];

const course: Course = {
  name: "ea_intro",
  title: "Introduction to effective altruism",
  modules,
  released: true,
  recommended: true,
  imageFileName: "world.jpg"
}
  
export default course