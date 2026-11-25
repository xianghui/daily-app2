from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
class H(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  q=path.split('?',1)[0].removeprefix('/daily-app2/').split('/',1)
  return str(Path('/Volumes/ExternalHD/daily_app2')/q[0]/'dist'/(q[1] if len(q)>1 else ''))
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',7601),H).serve_forever()
