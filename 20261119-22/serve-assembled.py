from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote
ROOT=Path(__file__).resolve().parent.parent
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  p=unquote(path.split('?',1)[0]).removeprefix('/daily-app2/')
  return str(ROOT/'deploy'/p)
 def log_message(self,*a):pass
ThreadingHTTPServer(('127.0.0.1',7003),Handler).serve_forever()
