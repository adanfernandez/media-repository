# Module Imports
import mariadb
import sys

try:
    conn = mariadb.connect(
        user="adan",
        password="db_user_passwd",
        host="localhost",
        port=3306,
        database="mediaRepository"
    )
except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)

cur = conn.cursor()