import http.server
from functools import partial
handler=partial(http.server.SimpleHTTPRequestHandler,directory='/Volumes/ExternalHD')
class Handler(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*args,**kw):super().__init__(*args,directory='/Volumes/ExternalHD/daily_app2/deploy',**kw)
 def translate_path(self,path):return super().translate_path(path.removeprefix('/daily-app2'))
http.server.ThreadingHTTPServer(('127.0.0.1',7862),Handler).serve_forever()
