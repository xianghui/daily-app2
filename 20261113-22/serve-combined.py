import http.server
class Handler(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*args,**kwargs):
  super().__init__(*args,directory='/Volumes/ExternalHD/daily_app2/deploy',**kwargs)
 def translate_path(self,path):
  return super().translate_path(path.removeprefix('/daily-app2'))
http.server.ThreadingHTTPServer(('127.0.0.1',6764),Handler).serve_forever()
