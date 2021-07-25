import axios from "axios"
import { Transaction } from "./Home.api";
import data from './Home.api.json';

export class HomeHandler {
    private url = "http://localhost:61783/api/";

    public getTransactions = async (userId: number) : Promise<Transaction[]> => {
        //const response = await axios.get(`${this.url}transactions/${userId}`);
        //return response.data.map((d: any) => new Transaction(d));
        return await data.map((d: any) => new Transaction(d));
    }
}