from django.test import TestCase
from .utils import calculate_price

# Create your tests here.

class CalculatePriceTest(TestCase):
    def test_valid_discount(self):
        result = calculate_price(1000, 10)
        self.assertEqual(result, 900.0) # result == 900.0

    def test_100_percent_discount(self):
        result = calculate_price(1000, 100)
        self.assertEqual(result, 0.0)

    def test_discount_greater_than_100(self):
        with self.assertRaises(ValueError):
            calculate_price(1000, 101)

    
    def test_discount_less_than_0(self):
        with self.assertRaises(ValueError):
            calculate_price(1000, -5)
    

# assertEqual(a, b) checks a == b