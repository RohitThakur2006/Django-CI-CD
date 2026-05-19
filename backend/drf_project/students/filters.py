import django_filters
from .models import Student

class StudentFilter(django_filters.FilterSet):
    branch = django_filters.CharFilter(field_name="branch",
                                        lookup_expr="iexact")
    student_name = django_filters.CharFilter(field_name='name', lookup_expr='icontains')
    id = django_filters.RangeFilter(field_name="student_id")
