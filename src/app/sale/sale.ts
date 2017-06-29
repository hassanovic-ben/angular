import {Client} from "../client/client";
import {Book} from "../book/book";
/**
 * Created by Hassanb on 29/06/2017.
 */
export class Sale{

  id:number;
  client:Client;
  book:Book;
  shipping:string;
  registeredDate:string;

}
