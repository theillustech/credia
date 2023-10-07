# Standard library imports
import os

# Core django imports
from django.core.asgi import get_asgi_application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'credai.settings')
application = get_asgi_application()
