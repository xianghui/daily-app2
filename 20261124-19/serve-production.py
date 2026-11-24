from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
root=Path(__file__).resolve().parents[1]
class H(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?',1)[0].removeprefix('/daily-app2/').lstrip('/')
  if path.startswith('20261124-19/') and not (root/'deploy/20261124-19/index.html').exists():return str(root/'20261124-19/dist'/path.split('/',1)[1])
  return str(root/'deploy'/path)
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',7559),H).serve_forever()
