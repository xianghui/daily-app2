from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote
ROOT=Path(__file__).resolve().parent.parent
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  parts=unquote(path.split('?',1)[0]).removeprefix('/daily-app2/').split('/',1)
  return str(ROOT/parts[0]/'dist'/(parts[1] if len(parts)>1 else ''))
 def log_message(self,*a):pass
ThreadingHTTPServer(('127.0.0.1',7227),Handler).serve_forever()
