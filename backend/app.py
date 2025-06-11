from flask import Flask, jsonify
import pymysql
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

def get_db_connection():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='ac2005alo13',
        database='personas_db',
        cursorclass=pymysql.cursors.DictCursor
    )

@app.route('/api/personas')
def get_personas():
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT nombre, apellidos, puesto, carrera, genero FROM persona")
            personas = cursor.fetchall()
    return jsonify(personas)

if __name__ == '__main__':
    app.run(debug=True)