import { CurrencyEnum, ItemStatusEnum, OrderStatusEnum } from "@prisma/client"

export const orders = [
    {
        "number": "1001",
        "amount": 599.99,
        "currency": CurrencyEnum.USD,
        "status": OrderStatusEnum.APPROVED,
        "items": [
            {
                "name": "Smartphone",
                "amount": 599.99
            }
        ]
    },
    {
        "number": "1002",
        "amount": 1299.99,
        "currency": CurrencyEnum.USD,
        "status": OrderStatusEnum.CANCELED,
        "items": [            
            {
                "name": "Tablet",
                "amount": 499.99
            },
            {
                "name": "Laptop",
                "amount": 1299.99
            }
        ]
    },
    {
        "number": "1003",
        "amount": 199.99,
        "currency": CurrencyEnum.CZK,
        "status": OrderStatusEnum.DELIVERED,
        "items": [
            {
                "name": "Wireless Earbuds",
                "amount": 149.99
            },
            {
                "name": "Smartwatch",
                "amount": 199.99
            }
        ]
    },
    {
        "number": "1004",
        "amount": 799.99,
        "currency": CurrencyEnum.EUR,
        "status": OrderStatusEnum.APPROVED,
        "items": [
            {
                "name": "Smart TV",
                "amount": 799.99
            }
        ]
    },
    {
        "number": "1005",
        "amount": 399.99,
        "currency": CurrencyEnum.USD,
        "status": OrderStatusEnum.PROCESSING,
        "items": [
            {
                "name": "Gaming Console",
                "amount": 399.99,
                "status": ItemStatusEnum.OUT_OF_STOCK
            }
        ]
    },
    {
        "number": "1006",
        "amount": 899.99,
        "currency": CurrencyEnum.EUR,
        "status": OrderStatusEnum.APPROVED,
        "items": [
            {
                "name": "Headphones",
                "amount": 99.99
            },
            {
                "name": "Digital Camera",
                "amount": 299.99
            }
        ]
    },
    {
        "number": "1007",
        "amount": 299.99,
        "currency": CurrencyEnum.BRL,
        "status": OrderStatusEnum.SHIPPED,
        "items": [
            {
                "name": "External Hard Drive",
                "amount": 129.99
            },
        ]
    },
];