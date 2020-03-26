import requests
import time
n=1
while(1):
    try:
        r = requests.get('http://127.0.0.1')
        print(r.text[:20],n)
        # r = requests.get('http://127.0.0.1/draw')
        # print(r.text[:10],n)
        # r = requests.get('http://127.0.0.1/alldata')
        # print(r.text[:10],n)
        n=n+1
        time.sleep(2)
    except:
        None