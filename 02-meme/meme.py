from flask import Flask, render_template
import requests

app = Flask(__name__)

def get_meme():
    url = "https://meme-api.com/gimme"

    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()

        data = response.json()

        meme_large = data.get("preview", [data.get("url")])[-1]
        subreddit = data.get("subreddit", "unknown")
        print(data)
        return meme_large, subreddit

    except Exception:
        return None, "error"

@app.route("/")
def index():
    meme_pic, subreddit = get_meme()
    return render_template(
        "index.html",
        meme_pic=meme_pic,
        subreddit=subreddit
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
