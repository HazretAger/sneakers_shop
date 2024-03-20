export interface IItem {
    type: string;
    price: number;
}

export interface CartSchema {
    items: [];
    totalSum: number;
    updateTotalSum: (item: IItem) => void;
}
