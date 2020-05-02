#coding:utf-8
# iTaiwan中央行政機關室內公共區域免費無線上網熱點查詢服務
import json 
import re
f = open("C:\\Users\\user\\Desktop\\wifi_info.json", "r",encoding="utf-8")
# print(f.read()[:100]) 
format=json.loads(f.read())
# print(len(format))
for i in range(len(format)):
    r=re.findall(r"^[台臺]中.*",format[i]['NAME'])
    if r!=[]:
        print(format[i])
        # print(format[i]['NAME'],format[i]['LATITUDE'],format[i]['LONGITUDE'])



# r=re.findall(r"^[台臺]中[^嘉義]","臺中榮總嘉義分院門診部門診大樓2F候診區")
# print(r)