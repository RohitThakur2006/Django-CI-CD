from django.test import TestCase
from .models import Teacher
from django.core.exceptions import ValidationError

# Create your tests here.
class TeacherModelTest(TestCase):
    def setUp(self):
        self.teacher = Teacher.objects.create(
            teacher_id="T123",
            name="John Brown",
            email="john@example.com"
        )

    def test_teacher_creation(self):
        """
        Test if the teacher object is created successfully/correctly
        """
        self.assertEqual(self.teacher.teacher_id, "T123")
        self.assertEqual(self.teacher.name, "John Brown")
        self.assertEqual(self.teacher.email, "john@example.com")


    def test_teacher_id_max_length(self):
        max_length =  self.teacher._meta.get_field('teacher_id').max_length
        self.assertEqual(max_length, 10)


    def test_id_exceed_max_length(self):
        teacher_invalid = Teacher(
            teacher_id="T1234567890",
            name="John Brown",
            email="john@example.com"
        )

        with self.assertRaises(ValidationError):
            teacher_invalid.full_clean()
