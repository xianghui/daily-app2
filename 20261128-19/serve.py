import http.server
from pathlib import Path
root=Path('/Volumes/ExternalHD/daily_app2')
class Handler(http.server.SimpleHTTPRequestHandler):
 def translate_path(self,path):
  bits=path.split('?')[0].removeprefix('/daily-app2/').lstrip('/').split('/')
  if bits[0] and (root/bits[0]/'dist').is_dir(): return str(root/bits[0]/'dist'/('/'.join(bits[1:])))
  return str(root/('/'.join(bits)))
http.server.ThreadingHTTPServer(('127.0.0.1',7896),Handler).serve_forever()
