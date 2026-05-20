from rest_framework import serializers
from teachers.models import Teacher
from students.models import Student
from mentors.models import Mentor

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"


class StudentSerializer(serializers.ModelSerializer):
    mentor = serializers.SlugRelatedField(
       slug_field="mentor_name", 
       queryset=Mentor.objects.all()) # this field name should be same as in the Student model
    class Meta:
        model = Student
        fields = "__all__"

class MentorSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True, 
                                 read_only=True) # The field name should be same as related_name
    class Meta:
        model = Mentor
        fields = ['mentor_id', 'mentor_name', 
                  'mentor_email', 'mentor_expertise', 'students']
