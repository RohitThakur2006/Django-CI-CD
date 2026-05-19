import django_filters
from .models import Mentor

class MentorFilter(django_filters.FilterSet):
    id_min = django_filters.CharFilter(
        method='filter_by_mentor_id', label="From Mentor ID")
    id_max = django_filters.CharFilter(
        method='filter_by_mentor_id', label="To Mentor ID")
    

    def filter_by_mentor_id(self, queryset, name, value):
        if name == "id_min":
            return queryset.filter(mentor_id__gte=value)
        elif name == "id_max":
            return queryset.filter(mentor_id__lte=value)
        return queryset
