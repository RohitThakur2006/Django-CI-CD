from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class StudentPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = "page_size"

    def get_paginated_response(self, data):
        return Response({"next": self.get_next_link(),
        "previous": self.get_previous_link(),
        "total_students": self.page.paginator.count,
        "total_pages": self.page.paginator.num_pages,
        "current_page": self.page.number,
        "results": data})
