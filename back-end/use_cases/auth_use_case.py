
class Auth_use_case:
    def __init__(self):
        """Create a database connection"""
        pass

    def do_register(self):
        return {'auth': True,
                'email': 'email',
                'token': '1234'}