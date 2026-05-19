FROM python:3.14-slim

WORKDIR /app

COPY . .

RUN pip install -r drf_project/requirements.txt


WORKDIR /app/drf_project


CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]