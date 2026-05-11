#!/usr/bin/env bash

set -o errexit # Exit on any error

pip install -r requirements.txt

cd drf_project

python manage.py collectstatic --noinput

python manage.py migrate
