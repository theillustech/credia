# Standard library imports
import os

# Core django imports
from django.core.wsgi import get_wsgi_application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'credai.settings.production')
application = get_wsgi_application()
