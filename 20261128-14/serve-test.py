import http.server
from pathlib import Path
root=Path('/Volumes/ExternalHD/daily_app2')
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  parts=path.split('?')[0].removeprefix('/daily-app2/').split('/')
  if parts[0] and (root/parts[0]/'dist').is_dir():return str(root/parts[0]/'dist'/('/'.join(parts[1:])))
  return str(root/('/'.join(parts)))
http.server.ThreadingHTTPServer(('127.0.0.1',7881),Handler).serve_forever()
