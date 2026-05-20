def calculate_price(amount, discount_percent):
    if discount_percent > 100 or discount_percent < 0:
        raise ValueError("Discount must be between 0 and 100")
    
    return amount - (amount * discount_percent / 100)


# print(calculate_price(1000, 10))
