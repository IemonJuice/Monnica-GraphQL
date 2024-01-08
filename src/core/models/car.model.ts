import {CarImage} from "../../database/entities/images.entity";
import {CarColorVariation} from "../../database/entities/colors.entity";
import {User} from "../../database/entities/user.entity";


export class Car {
    id: number;
    HP: number;
    rating: number;
    model: string;
    price: number;
    releaseDate: string;
    imagesUrl: Promise<CarImage[]>;
    colors: Promise<CarColorVariation[]>;
    usersCheckoutId: User[]
    usersLikedId: User[]

}