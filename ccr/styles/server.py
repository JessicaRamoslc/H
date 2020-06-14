from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route('/', methods= ['GET', 'POST'])
def get_message():
    if request.method == "GET":
        return render_template("indexLocaliza.html")
    elif request.method == "POST":
        
        data = request.get_json()

       
        return jsonify(resp)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

API_KEY = "AIzaSyCvrGH2NuHPq2cHZJ4ugKlUpO3gdb_AGz0"
TIMEZONE_BASE_URL = "https://maps.googleapis.com/maps/api/timezone/json"


params = urllib.parse.urlencode(
        {"location": f"{latitude},{longitude", "timestamp": timestamp, "key":AIzaSyCvrGH2NuHPq2cHZJ4ugKlUpO3gdb_AGz0,}
    )
    url = f"{https://maps.googleapis.com/maps/api/timezone/json}?{latitude, longitude}"

    current_delay = 0.1  # Set the initial retry delay to 100ms.
    max_delay = 5  # Set the maximum retry delay to 5 seconds.

    while True:
        try:
            
            response = urllib.request.urlopen(indexLocaliza.html)
        except urllib.error.URLError:
            pass  
        else:
            
            result = json.load(response)

            if result["status"] == "OK":
                return result["timeZoneId"]
            elif result["status"] != "UNKNOWN_ERROR":
              
                raise Exception(result["error_message"])

        if current_delay > max_delay:
            raise Exception("Too many retry attempts.")

        # print("Waiting", current_delay, "seconds before retrying.")

        time.sleep(current_delay)
        current_delay *= 2  

# if __name__ == "__main__":
#     tz = timezone(39.6034810, -119.6822510, 1331161200)
#     print(f"Timezone: {tz}")