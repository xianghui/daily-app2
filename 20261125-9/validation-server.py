from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
class H(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  q=path.split('?',1)[0].removeprefix('/daily-app2/');r=Path('/Volumes/ExternalHD/daily_app2');parts=q.split('/');d=r/parts[0]/'dist'
  if d.exists():return str(d.joinpath(*parts[1:]))
  return str(r/q)
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',7597),H).serve_forever()
