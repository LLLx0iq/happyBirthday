from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def start_page():
    return render_template("start_page.html")

@app.route('/chose')
def chose_page():
    return render_template("chose.html")

@app.route('/buttons')
def buttons():
    return render_template("buttons.html")

@app.route('/congratulations')
def cong():
    return render_template("cong.html")


@app.route('/rules')
def rules():
    return render_template("rules.html")

@app.route('/end_page')
def end_page():
    return render_template("end_page.html")

if __name__ == "__main__":
    app.run(debug=True)