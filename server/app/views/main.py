"""
Main view for the app
"""
from app.views import TemplatedView


class MainView(TemplatedView):
    """
    Main view.
    """
    def get(self):
        """ Get route for main app """
        self.render_reponse('base.html')
