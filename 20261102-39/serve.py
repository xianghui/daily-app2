from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
root=Path(__file__).resolve().parent.parent
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?')[0]
  prefix='/daily-app2/20261102-39/'
  if path.startswith(prefix):return str(root/'20261102-39/dist'/path[len(prefix):])
  if path.startswith('/daily-app2/'):return str(root/path[len('/daily-app2/'):])
  return str(root/path.lstrip('/'))
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',5739),Handler).serve_forever()
