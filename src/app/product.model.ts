import { Category } from './category.model';
export class Product{
    id:number;
    name:string;
    price:number;
    quantity:number;
    image:string;
    category:Category;
}