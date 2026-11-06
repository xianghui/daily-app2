from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw):super().__init__(*a,directory=str(Path(__file__).resolve().parent.parent/'deploy'),**kw)
 def translate_path(self,path):
  if path.startswith('/daily-app2'):path=path[len('/daily-app2'):]
  return super().translate_path(path)
ThreadingHTTPServer(('127.0.0.1',6145),Handler).serve_forever()
