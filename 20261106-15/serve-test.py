from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw):super().__init__(*a,directory=str(Path(__file__).resolve().parent/'dist'),**kw)
 def translate_path(self,path):
  if path.startswith('/daily-app2/20261106-15/'):path=path[len('/daily-app2/20261106-15'):]
  return super().translate_path(path)
ThreadingHTTPServer(('127.0.0.1',6155),Handler).serve_forever()
