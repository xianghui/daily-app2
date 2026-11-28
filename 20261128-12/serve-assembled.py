import http.server
from pathlib import Path
root=Path('/Volumes/ExternalHD/daily_app2/deploy')
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  return str(root/path.split('?')[0].removeprefix('/daily-app2/').lstrip('/'))
http.server.ThreadingHTTPServer(('127.0.0.1',7872),Handler).serve_forever()
