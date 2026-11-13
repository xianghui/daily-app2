import http.server,os
os.chdir('/Volumes/ExternalHD/daily_app2/deploy')
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  return super().translate_path(path.removeprefix('/daily-app2'))
http.server.ThreadingHTTPServer(('127.0.0.1',6762),Handler).serve_forever()
