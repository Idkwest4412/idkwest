from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/rules")
def rules():
    return render_template("rules.html")

@app.route("/events")
def events():
    return render_template("events.html")

@app.route("/invite")
def invite():
    return render_template("invite.html")

@app.route("/bot-tos")
def bot_tos():
    return render_template("bot_tos.html")

if __name__ == "__main__":
    app.run(debug=True)

