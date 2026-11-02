from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
root=Path(__file__).resolve().parent.parent/'deploy'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  path=path.split('?')[0];prefix='/daily-app2/'
  return str(root/path[len(prefix):]) if path.startswith(prefix) else str(root/path.lstrip('/'))
 def log_message(self,*args):pass
ThreadingHTTPServer(('127.0.0.1',5755),Handler).serve_forever()
