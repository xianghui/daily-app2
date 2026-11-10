from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
root=Path('/Volumes/ExternalHD/daily_app2/deploy')
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  return str(root/path.split('?')[0].removeprefix('/daily-app2/'))
ThreadingHTTPServer(('127.0.0.1',6371),Handler).serve_forever()
