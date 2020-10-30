namespace AprajitaRetails.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'AprajitaRetails.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
