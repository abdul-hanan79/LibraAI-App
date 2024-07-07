import { IUser } from "../contexts/AuthContext"

export interface ICar {
    _id: string
    name: string
    description: string
    milage: string
    price: string
    start_date: Date
    end_date: Date
    image: string
    user: string | IUser
    city: string
}


export interface IOrder {
    _id: string
    car: ICar,
    order_by: IUser
    start_date: Date,
    end_date: Date
    car_owner: IUser
}

export interface IReview {
    user: IUser
    msg: string
    stars: number
    car: ICar
}