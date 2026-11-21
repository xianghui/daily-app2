from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote
ROOT=Path(__file__).resolve().parent.parent/'deploy'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  return str(ROOT/unquote(path.split('?',1)[0]).removeprefix('/daily-app2/'))
 def log_message(self,*a):pass
ThreadingHTTPServer(('127.0.0.1',7326),Handler).serve_forever()
