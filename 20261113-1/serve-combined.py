import http.server,os
os.chdir('/Volumes/ExternalHD/daily_app2')
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  return super().translate_path('/deploy/'+path.removeprefix('/daily-app2/'))
http.server.ThreadingHTTPServer(('127.0.0.1',6631),Handler).serve_forever()
