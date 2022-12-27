from flask import Flask, request
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

tasks_list = {
    "27/12/2022": ["Need to finish test task", "eat🐇", "drink coffee"]
}

@app.route('/get_day_task_list', methods=['GET'])
@cross_origin()
def get_tasks_day_list():
    args = request.args
    year = args.get('year')
    mouth = args.get('mouth')
    day = args.get('day')
    key = f"{day}/{mouth}/{year}"
    try:
        result = {"status": True, "tasks_list": tasks_list[key]}
    except KeyError:
        result = {"status": False, "tasks_list": []}
    return result

@app.route('/add_new_task_to_day', methods=['POST'])
@cross_origin()
def add_new_task_to_day():
    data = request.get_json()
    if data != None: 
        fullDayPath = data["fullDayPath"]
        task = data["task"]
    else: 
        # FIXME:
        fullDayPath = "27/12/2022"
        task = "errored task🍒"
    try:
        tasks_list[fullDayPath].append(task)
    except KeyError:
        if data != None:
            tasks_list[fullDayPath] = [task]

    return {"status": True, "tasks_list": tasks_list[fullDayPath]}

if __name__ == '__main__':
    app.run(debug=True)